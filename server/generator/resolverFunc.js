const toCamelCase = require('camelcase');
const { singular } = require('pluralize');
const { ModuleFilenameHelpers } = require('webpack');

const resolverFunc = {};

resolverFunc.queryPrimaryKey = (tableName, primaryKey) => {
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

resolverFunc.queryAll = (tableName) => {
    const queryName = toCamelCase(tableName);
    return `
          ${queryName}: () => {
            const query = 'SELECT * FROM ${tableName}';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },`;
};

resolverFunc.mutCreate = (tableName, primaryKey, columns) => {
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

resolverFunc.mutUpdate = (tableName, primaryKey, columns) => {
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

resolverFunc.mutDelete = (tableName, primaryKey) => {
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
const isReferenceTable = (foreignKeys, columns) => {
    return Object.keys(columns).length === Object.keys(foreignKeys).length + 1;
};

resolverFunc.determineRelationships = (tableName, SQLtables) => {
    const { primaryKey, referencedBy, foreignKeys } = SQLtables[tableName];
    let relationships = '';

    Object.keys(referencedBy).forEach((refTable) => {
        const {
            referencedBy: foreignRefBy,
            foreignKeys: foreignFKeys,
            columns: foreignColumns,
        } = SQLtables[refTable];

        // One-to-One
        if (foreignRefBy && foreignRefBy[tableName]) {
            relationships += oneToOne(
                tableName,
                primaryKey,
                refTable,
                referencedBy[refTable]
            );
            const oneToOne = (
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
        }
        // One-to-Many 
        else if (!isReferenceTable(foreignFKeys, foreignColumns)) {
            relationships += oneToMany(
                tableName,
                primaryKey,
                refTable,
                referencedBy[refTable]
            );
        }
        // Many-to-Many 
        else {
            Object.keys(foreignFKeys).forEach((FKey) => {
                if (tableName !== foreignFKeys[FKey].referenceTable) {
                    const manyToManyTable = foreignFKeys[FKey].referenceTable;
                    const manyToManyTableRefKey = FKey;

                    const currentTableRefKey =
                        SQLtables[tableName].referencedBy[refTable];
                    const manyToManyTablePKey = SQLtables[manyToManyTable].primaryKey;
                    relationships += manyToMany(
                        tableName,
                        primaryKey,
                        refTable,
                        manyToManyTableRefKey,
                        currentTableRefKey,
                        manyToManyTable,
                        manyToManyTablePKey
                    );
                }
            });

            if (foreignKeys) {
                Object.keys(foreignKeys).forEach((fk) => {
                    const refTable = SQLtables[tableName].foreignKeys[fk].referenceTable;
                    const refTablePk = SQLtables[refTable].primaryKey;
                    const refKey = SQLtables[tableName].foreignKeys[fk].referenceKey;
                    const checkQuery = foreignKeyCheck(
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

const oneToMany = (
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

const manyToMany = (
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

const foreignKeyCheck = (
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

module.exports = {
    resolverFunc,
    isReferenceTable
};