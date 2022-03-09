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
    return `\n    ${toCamelCase(`create${singular(tableName)}`
    )} (\n${mutationHelper.paramType(
      primaryKey,
      foreignKeys,
      columns,
      false
    )}): ${pascalCase(singular(tableName))}!\n;`
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
      `update${singular(tableName)}`
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
      const {dataType, isNullable} = columns[columnName];
      if (!isRequired && columnName === primaryKey) {
        continue; //this will help create a new SQL row, primary keys are serial (autoincremental) so we don't need to include in the create statement
      }

      if(isRequired && columnName === primaryKey) {
        typeDef += `      ${columnName}: ${
          typeConversion[dataType] ? typeConversion[dataType] : 'Int'
        }!,\n`;
      } 
      else {
        typeDef += `      ${columnName}: ${
          typeConversion[dataType] ? typeConversion[dataType] : 'Int'
        }`;
        if(isNullable !== 'YES') typeDef += '!';
        typeDef += ',\n';
      }
    }
    if(typeDef !== '') typeDef += '    ';
    return typeDef;
  }

  mutationHelper.delete = (tableName, primaryKey) => {
    return `\n    ${toCamelCase(
      `delete${singular(tableName)}`
    )}(${primaryKey}: ID!): ${pascalCase(singular(tableName))}!\n`;
  }

  //deletePeople(_id: ID!): People!;

  customHelper.getColumns = (primaryKey, foreignKeys, columns) => {
    let columnsStr = '';
    for (const columnName in columns) {
      if (!(foreignKeys && foreignKeys[columnName]) && columnName !== primaryKey) {
        const { dataType, isNullable, columnDefault } = columns[columnName];
        columnsStr += `\n    ${columnName}: ${
          typeConversion[dataType] ? typeConversion[dataType] : 'Int'
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

  module.exports = {
    isReferenceTable,
    queryHelper,
    mutationHelper,
    customHelper
  }