
const helper = {};

helper.isReferenceTable = (foreignKeys, columns) => {
    return Object.keys(columns).length === Object.keys(foreignKeys).length + 1;
  };

helper.typeSet = (str) => {
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

  module.exports = helper