const toCamelCase = require('camelcase');
const { pascalCase } = require('pascal-case');
const { singular } = require('pluralize');

const queryHelper = {};
const mutationHelper = {};

queryHelper.isReferenceTable = (foreignKeys, columns) => {
    return Object.keys(columns).length === Object.keys(foreignKeys).length + 1;
  };

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


  module.exports = {
    queryHelper,
    mutationHelper
  }