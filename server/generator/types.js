const { pascalCase } = require('pascal-case');
const toCamelCase = require('camelcase');
const { singular } = require('pluralize');
const helper = require('./helper')

const types = {};

types.queries = (tableName, tableData) => {
  const { primaryKey, foreignKeys, columns } =  tableData
  const tableNameSingular = singular(tableName);
  const primaryKeyType = helper.typeSet(columns[primaryKey].dataType);
  let byID = toCamelCase(tableNameSingular);

  return (
    `${toCamelCase(tableName)}: [${pascalCase(tableNameSingular)}!]!\n` + 
    `${byID}(${primaryKey}: ${primaryKeyType}!): ${pascalCase(tableNameSingular)}!\n`
  );

}