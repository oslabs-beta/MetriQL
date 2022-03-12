const toCamelCase = require('camelcase');
const { pascalCase } = require('pascal-case');
const { singular } = require('pluralize');

const queryHelper = {};
const mutationHelper = {};
const customHelper = {};

const isReferenceTable = (foreignKeys, columns) => {
  return Object.keys(columns).length === Object.keys(foreignKeys).length + 1;
};

// console.log(typeof queryHelper.isReferenceTable);
 
queryHelper.typeSet = (str) => {
  switch (str) {
    case 'character varying':
      return 'String';
    case 'character':
      return 'String';
    case 'integer':
      return 'Int';
    case 'text':
      return 'String';
    case 'date':
      return 'String';
    case 'boolean':
      return 'Boolean';
    default:
      return 'Int';
  }
};

queryHelper.queryPK = (tableName, primaryKey) => {
  let queryName = toCamelCase(singular(tableName));
  if (tableName === singular(tableName)) queryName += 'ByID';
  return `
        ${queryName}: (parent, args) => {
          const query = 'SELECT * FROM ${tableName} WHERE ${primaryKey} = $1';
          const values = [args.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        },`;
};

queryHelper.queryAll = (tableName) => {
  const queryName = toCamelCase(tableName);
  return `
        ${queryName}: () => {
          const query = 'SELECT * FROM ${tableName}';
          return db.query(query)
            .then(data => data.rows)
            .catch(err => new Error(err));
        },`;
};


const typeConversion = {
  'character varying': 'String',
  character: 'String',
  integer: 'Int',
  text: 'String',
  date: 'String',
  boolean: 'Boolean',
  numeric: 'Int',
}  //return 'Int' if undefined;

mutationHelper.create = (tableName, primaryKey, foreignKeys, columns) => {
  return `\n    ${toCamelCase(`create_${singular(tableName)}`
  )} (\n${mutationHelper.paramType(
    primaryKey,
    foreignKeys,
    columns,
    false
  )}): ${pascalCase(singular(tableName))}!\n`
}
//return from .create:
//    createPeople(
//      name: String!, <- required
//      species_id: Int,
//      homeworld_id: Int,
// _id: INt
// ....
//    ): People;

mutationHelper.update = (tableName, primaryKey, foreignKeys, columns) => {
  return `\n    ${toCamelCase(
    `update_${singular(tableName)}`
  )}(\n${mutationHelper.paramType(
    primaryKey,
    foreignKeys,
    columns,
    true
  )}): ${pascalCase(singular(tableName))}!\n`;
}
//return from .update:
//    updatePeople(
//      name: String!, <- required
//      species_id: Int,
//      homeworld_id: Int,
// _id: INt
// ....
//    ): People;


mutationHelper.paramType = (primaryKey, foreignKeys, columns, isRequired) => {
  let typeDef = '';
  for (const columnName in columns) {
    const { dataType, isNullable } = columns[columnName];
    if (!isRequired && columnName === primaryKey) {
      continue; //this will help create a new SQL row, primary keys are serial (autoincremental) so we don't need to include in the create statement
    }

    if (isRequired && columnName === primaryKey) {
      typeDef += `      ${columnName}: ${typeConversion[dataType] ? typeConversion[dataType] : 'Int'
        }!,\n`;
    }
    else {
      typeDef += `      ${columnName}: ${typeConversion[dataType] ? typeConversion[dataType] : 'Int'
        }`;
      if (isNullable !== 'YES') typeDef += '!';
      typeDef += ',\n';
    }
  }
  if (typeDef !== '') typeDef += '    ';
  return typeDef;
}

mutationHelper.delete = (tableName, primaryKey) => {
  return `\n    ${toCamelCase(
    `delete_${singular(tableName)}`
  )}(${primaryKey}: ID!): ${pascalCase(singular(tableName))}!\n`;
}

//deletePeople(_id: ID!): People!;

mutationHelper.createMut = (tableName, primaryKey, columns) => {
  const queryName = toCamelCase('create_' + singular(tableName));
  const columnNames = Object.keys(columns);
  const queryValues = columnNames.filter((column) => column !== primaryKey);

  return `
        ${queryName}: (parent, args) => {
          const query = 'INSERT INTO ${tableName}(${queryValues.join(
    ', '
  )}) VALUES(${queryValues.map((el, i) => `$${++i}`).join(', ')}) RETURNING *';
          const values = [${queryValues
      .map((column) => `args.${column}`)
      .join(', ')}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        },`;
};

mutationHelper.updateMut = (tableName, primaryKey, columns) => {
  const queryName = toCamelCase('update_' + singular(tableName));
  const columnNames = Object.keys(columns);
  const queryValues = columnNames.filter((column) => column !== primaryKey);
  const conditional = queryValues.length + 1;

  return `
        ${queryName}: (parent, args) => {
          const query = 'UPDATE ${tableName} SET ${queryValues
      .map((el, i) => `${el}=$${++i}`)
      .join(', ')} WHERE ${primaryKey} = $${conditional} RETURNING *';
          const values = [${queryValues
      .map((column) => `args.${column}`)
      .join(', ')}, args.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        },`;
};

mutationHelper.deleteMut = (tableName, primaryKey) => {
  const queryName = toCamelCase('delete_' + singular(tableName));

  return `
        ${queryName}: (parent, args) => {
          const query = 'DELETE FROM ${tableName} WHERE ${primaryKey} = $1 RETURNING *';
          const values = [args.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        },`;
};

customHelper.getColumns = (primaryKey, foreignKeys, columns) => {
  let columnsStr = '';
  for (const columnName in columns) {
    if (!(foreignKeys && foreignKeys[columnName]) && columnName !== primaryKey) {
      const { dataType, isNullable, columnDefault } = columns[columnName];
      columnsStr += `\n    ${columnName}: ${typeConversion[dataType] ? typeConversion[dataType] : 'Int'
        }`;
      if (isNullable === 'NO' && columnDefault === null) columnsStr += '!';
    }
  }
  return columnsStr;
}

customHelper.getRelationships = (tableName, tables) => {
  let relationships = '';
  const alreadyAddedType = [];
  for (const refTableName in tables[tableName].referencedBy) {
    const {
      referencedBy: foreignRefBy,
      foreignKeys: foreignFKeys,
      columns: foreignColumns,
    } = tables[refTableName];

    if (foreignRefBy && foreignRefBy[tableName]) {
      if (!alreadyAddedType.includes(refTableName)) {
        alreadyAddedType.push(refTableName);
        const refTableType = pascalCase(singular(refTableName));
        relationships += `\n    ${toCamelCase(
          singular(refTableName)
        )}: ${refTableType}`;
      }
    } else if (
      Object.keys(foreignColumns).length !==
      Object.keys(foreignFKeys).length + 1
    ) {
      if (!alreadyAddedType.includes(refTableName)) {
        alreadyAddedType.push(refTableName);
        const refTableType = pascalCase(singular(refTableName));

        relationships += `\n    ${toCamelCase(
          refTableName
        )}: [${refTableType}]`;
      }
    }

    for (const foreignFKey in foreignFKeys) {
      if (tableName !== foreignFKeys[foreignFKey].referenceTable) {
        if (!alreadyAddedType.includes(refTableName)) {
          alreadyAddedType.push(refTableName);
          const manyToManyTable = toCamelCase(
            foreignFKeys[foreignFKey].referenceTable
          );
          relationships += `\n    ${manyToManyTable}: [${pascalCase(
            singular(manyToManyTable)
          )}]`;
        }
      }
    }
  }
  for (const FKTableName in tables[tableName].foreignKeys) {
    const object = tables[tableName].foreignKeys[FKTableName];
    const refTableName = object.referenceTable;
    if (refTableName) {
      const refTableType = pascalCase(singular(refTableName));
      relationships += `\n    ${toCamelCase(refTableName)}: [${refTableType}]`;
    }
  }

  return relationships;
}


customHelper.determineRelationships = (tableName, SQLtables) => {
  const { primaryKey, referencedBy, foreignKeys } = SQLtables[tableName];
  let relationships = '';

  Object.keys(referencedBy).forEach((refTable) => {
    const {
      referencedBy: foreignRefBy,
      foreignKeys: foreignFKeys,
      columns: foreignColumns,
    } = SQLtables[refTable];

    // One-to-One relationship
    if (foreignRefBy && foreignRefBy[tableName]) {
      relationships += customHelper.oneToOne(
        tableName,
        primaryKey,
        refTable,
        referencedBy[refTable]
      );
    }
    // One-to-Many relationship
    else if (!isReferenceTable(foreignFKeys, foreignColumns)) {
      relationships += customHelper.oneToMany(
        tableName,
        primaryKey,
        refTable,
        referencedBy[refTable]
      );
    }
    // Many-to-Many relationship
    else {
      // iterate through the foreign keys of the refTable -- refTable is a Join Table
      // locate the foreign key that does not reference our current table (this is the link to the 3rd table)
      Object.keys(foreignFKeys).forEach((FKey) => {
        if (tableName !== foreignFKeys[FKey].referenceTable) {
          // store the name of the table that the join table links to our current table
          const manyToManyTable = foreignFKeys[FKey].referenceTable; // films
          // store the foreign key from the join table that links to the manyToManyTable
          const manyToManyTableRefKey = FKey; // films_id
          // store the foreign key from the join table that links the currentTable
          const currentTableRefKey =
            SQLtables[tableName].referencedBy[refTable]; // person_id
          // store the primary key name from the manyToManyTable
          const manyToManyTablePKey = SQLtables[manyToManyTable].primaryKey; // primary key of the films table (_id)
          relationships += customHelper.manyToMany(
            tableName, // people
            primaryKey, // _id (primary key from people)
            refTable, // people_in_films ... aka join table
            manyToManyTableRefKey, // key inside of people_in_films that points to films table (film_id)
            currentTableRefKey, // key inside of people_in_films that points to people table (person_id)
            manyToManyTable, // films table
            manyToManyTablePKey // primary key from films table, aka _id
          );
        }
      });
      // confirm all relationships from foreign keys are captured
      if (foreignKeys) {
        Object.keys(foreignKeys).forEach((fk) => {
          const refTable = SQLtables[tableName].foreignKeys[fk].referenceTable;
          const refTablePk = SQLtables[refTable].primaryKey;
          const refKey = SQLtables[tableName].foreignKeys[fk].referenceKey;
          const checkQuery = customHelper.foreignKeyCheck(
            tableName,
            primaryKey,
            refKey,
            fk,
            refTable,
            refTablePk
          );
          if (!relationships.includes(checkQuery)) relationships += checkQuery;
        });
      }
    }
  });
  return relationships;
};

customHelper.oneToOne = (
  tableName,
  primaryKey,
  refTable,
  refForeignKey
) => {
  return `
        ${toCamelCase(refTable)}: (${toCamelCase(tableName)}) => {
          const query = 'SELECT * FROM ${refTable} WHERE ${refForeignKey} = $1';
          const values = [${tableName}.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        },`;
};

customHelper.oneToMany = (
  tableName,
  primaryKey,
  refTable,
  refForeignKey
) => {
  return `
        ${toCamelCase(refTable)}: (${toCamelCase(tableName)}) => {
          const query = 'SELECT * FROM ${refTable} WHERE ${refForeignKey} $1';
          const values = [${tableName}.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows)
            .catch(err => new Error(err));
        },`;
};

customHelper.manyToMany = (
  tableName,
  primaryKey,
  refTable,
  manyToManyTableRefKey,
  currentTableRefKey,
  manyToManyTable,
  manyToManyTablePKey
) => {
  return `
        ${toCamelCase(manyToManyTable)}: (${toCamelCase(tableName)}) => {
          const query = 'SELECT * FROM ${manyToManyTable} LEFT OUTER JOIN ${refTable} ON ${manyToManyTable}.${manyToManyTablePKey} = ${refTable}.${manyToManyTableRefKey} WHERE ${refTable}.${currentTableRefKey} = $1';
          const values = [${tableName}.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows)
            .catch(err => new Error(err));
        }, `;
};


customHelper.foreignKeyCheck = (
  tableName,
  primaryKey,
  refKey,
  fk,
  refTable,
  refTablePK
) => {
  return `
        ${toCamelCase(refTable)}: (${toCamelCase(tableName)}) => {
          const query = 'SELECT ${refTable}.* FROM ${refTable} LEFT OUTER JOIN ${tableName} ON ${refTable}.${refTablePK} = ${tableName}.${refKey} WHERE ${tableName}.${primaryKey} = $1';
          const values = [${tableName}.${primaryKey}];
          return db.query(query, values)
            .then(data => data.rows)
            .catch(err => new Error(err));
        }, `;
};


const schemaImport = (uri) => {
  return (
    `const { makeExecutableSchema } = require('graphql-tools');\n` +
    `const { Pool } = require('pg');\n` +
    `const PG_URI = '${uri}';\n\n` +
    `const pool = new Pool({\n` +
    `  connectionString: PG_URI\n` +
    `});\n\n` +
    `const db = {};\n` +
    `db.query = (text,params, callback) => {
  console.log('executed query:', text)
  return pool.query(text, params, callback) \n};\n\n`
  );
};

const schemaExport = () => {
  return `  const schema = makeExecutableSchema({    
    typeDefs,    
    resolvers,
    });

    module.exports = schema;`;
};

module.exports = {
  isReferenceTable,
  queryHelper,
  mutationHelper,
  customHelper,
  schemaImport,
  schemaExport
}