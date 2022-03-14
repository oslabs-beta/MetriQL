const { pascalCase } = require('pascal-case');
const toCamelCase = require('camelcase');
const { singular } = require('pluralize');
const { typesFunc } = require('./typesFunc')

const generateTypes = {};

generateTypes.queries = (tableName, tableData) => {
  const { primaryKey, foreignKeys, columns } =  tableData
  const tableNameSingular = singular(tableName);
  const primaryKeyType = typesFunc.typeSet(columns[primaryKey].dataType);
  let byID = toCamelCase(tableNameSingular);
  if (tableNameSingular === tableName) byID += 'ByID'

  return (
    `    ${toCamelCase(tableName)}: [${pascalCase(tableNameSingular)}!]!\n` + 
    `    ${byID}(${primaryKey}: ${primaryKeyType}!): ${pascalCase(tableNameSingular)}!\n`
  );

};

generateTypes.mutations = (tableName, tableData) => {
  const {primaryKey, foreignKeys, columns} = tableData;

  return (
    typesFunc.mutCreate(tableName, primaryKey, foreignKeys, columns) +
    typesFunc.mutUpdate(tableName, primaryKey, foreignKeys, columns) +
    typesFunc.mutDelete(tableName, primaryKey)
  );
};

generateTypes.custom = (tableName, tables) => {
  const { primaryKey, foreignKeys, columns } = tables[tableName];
  const primaryKeyType = typesFunc.typeSet(columns[primaryKey].dataType);
  return `${
    `  type ${pascalCase(singular(tableName))} {\n` +
    `    ${primaryKey}: ${primaryKeyType}`
  }${typesFunc.getColumns(
    primaryKey,
    foreignKeys,
    columns
  )}${typesFunc.getRelationships(tableName, tables)}\n }\n\n`;
}

module.exports = generateTypes;