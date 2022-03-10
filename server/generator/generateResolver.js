const { singular } = require('pluralize');
const { pascalCase } = require('pascal-case');
const { queryHelper, mutationHelper, customHelper } = require('./helper')

const generateResolver = {};

generateResolver.queries = (tableName, tableData) => {
    const { primaryKey } = tableData;
    const queryPK = queryHelper.queryPK(tableName, primaryKey);
    const queryAll = queryHelper.queryAll(tableName);
    return `\n${queryPK}\n${queryAll}`;
}


generateResolver.mutations = (tableName, tableData) => {
    const { primaryKey, columns } = tableData;
    const createMut = mutationHelper.createMut(
        tableName,
        primaryKey,
        columns
    );
    const updateMut = mutationHelper.updateMut(
        tableName,
        primaryKey,
        columns
    );
    const deleteMut = mutationHelper.deleteMut(
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

    relationshipTypes += customHelper.determineRelationships(
        tableName,
        SQLtables
    );
    return `
      ${queryName}: {
        ${relationshipTypes}
      },\n`;
};

module.exports = generateResolver;