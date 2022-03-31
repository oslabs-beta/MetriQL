const { singular } = require('pluralize');
const { pascalCase } = require('pascal-case');
const { resolverFunc } = require('./resolverFunc')

const generateResolver = {};

generateResolver.queries = (tableName, tableData) => {
    const { primaryKey } = tableData;
    const queryPrimaryKey = resolverFunc.queryPrimaryKey(tableName, primaryKey);
    const queryAll = resolverFunc.queryAll(tableName);
    console.log('here')
    return `\n${queryPrimaryKey}\n${queryAll}`;
}
 

generateResolver.mutations = (tableName, tableData) => {
    const { primaryKey, columns } = tableData;
    const createMut = resolverFunc.mutCreate(
        tableName,
        primaryKey,
        columns
    );
    const updateMut = resolverFunc.mutUpdate(
        tableName,
        primaryKey,
        columns
    );
    const deleteMut = resolverFunc.mutDelete(
        tableName,
        primaryKey
    );
    return `${createMut}\n${updateMut}\n${deleteMut}\n`;
};

generateResolver.custom = (tableName, SQLtables) => {
    const { referencedBy } = SQLtables[tableName];
    if (!referencedBy) return '';
    const queryName = pascalCase(singular(tableName));
    let relationshipTypes = '';

    relationshipTypes += resolverFunc.determineRelationships(
        tableName,
        SQLtables
    );
    return `
      ${queryName}: {
        ${relationshipTypes}
      },\n`;
};

module.exports = generateResolver;