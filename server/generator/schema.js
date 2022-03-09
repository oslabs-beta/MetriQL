const types = require('./types');
const queryHelper = require('./helper');

const schema = {};

schema.typeGenerator = (SQLtables) => {
    let queryType = '';
    let mutationType = '';
    let customType = '';
    for (const tableName in SQLtables) {
        const tableData = SQLtables[tableName];
        const { foreignKeys, columns } = tableData;
        if (!foreignKeys || !helper.isReferenceTable(foreignKeys, columns)) {
            queryType += types.queries(tableName, tableData); //done
            mutationType += types.mutations(tableName, tableData);
            customType += types.custom(tableName, tables);
        }
    }
    //types compiler

    //return to controller
}
