const { pascalCase } = require('pascal-case');
const toCamelCase = require('camelcase');
const { singular } = require('pluralize');
const { queryHelper, mutationHelper, customHelper} = require('./helper')

const generateTypes = {};

generateTypes.queries = (tableName, tableData) => {
  const { primaryKey, foreignKeys, columns } =  tableData
  const tableNameSingular = singular(tableName);
  const primaryKeyType = queryHelper.typeSet(columns[primaryKey].dataType);
  let byID = toCamelCase(tableNameSingular);

  return (
    `${toCamelCase(tableName)}: [${pascalCase(tableNameSingular)}!]!\n` + 
    `${byID}(${primaryKey}: ${primaryKeyType}!): ${pascalCase(tableNameSingular)}!\n`
  );

};

//people: [Person!] //you want people(plural), you're going to get an array of every person
// person(_id: 'Int'!): Person! //you want one person, you need an id that has to be an interger and you get person back

generateTypes.mutations = (tableName, tableData) => {
  const {primaryKey, foreignKeys, columns} = tableData;

  return (
    mutationHelper.create(tableName, primaryKey, foreignKeys, columns) +
    mutationHelper.update(tableName, primaryKey, foreignKeys, columns) +
    mutationHelper.delete(tableName, primaryKey)
  );
};

generateTypes.custom = (tableName, tables) => {
  const { primaryKey, foreignKeys, columns } = tables[tableName];
  const primaryKeyType = queryHelper.typeSet(columns[primaryKey].dataType);
  return `${
    `  type ${pascalCase(singular(tableName))} {\n` +
    `    ${primaryKey}: ${primaryKeyType}`
  }${customHelper.getColumns(
    primaryKey,
    foreignKeys,
    columns
  )}${customHelper.getRelationships(tableName, tables)}\n }\n\n`;
}

module.exports = generateTypes;