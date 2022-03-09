const { pascalCase } = require('pascal-case');
const toCamelCase = require('camelcase');
const { singular } = require('pluralize');
const { queryHelper, mutationHelper} = require('./helper')

const types = {};

types.queries = (tableName, tableData) => {
  const { primaryKey, foreignKeys, columns } =  tableData
  const tableNameSingular = singular(tableName);
  const primaryKeyType = queryHelper.typeSet(columns[primaryKey].dataType);
  let byID = toCamelCase(tableNameSingular);

  return (
    `${toCamelCase(tableName)}: [${pascalCase(tableNameSingular)}!]!\n` + 
    `${byID}(${primaryKey}: ${primaryKeyType}!): ${pascalCase(tableNameSingular)}!\n`
  );

};

types.mutations = (tableName, tableData) => {
  const {primaryKey, foreignKeys, columns} = tableData;

  return (
    mutationHelper.create(tableName, primaryKey, foreignKeys, columns) +
    mutationHelper.update(tableName, primaryKey, foreignKeys, columns) +
    mutationHelper.destroy(tableName, primaryKey)
  );
};

