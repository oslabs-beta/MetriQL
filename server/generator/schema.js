const generateTypes = require('./generateTypes');
const { queryHelper, isReferenceTable } = require('./helper');

const schema = {};

schema.typeGenerator = (SQLtables) => {
    let queryType = '';
    let mutationType = '';
    let customType = '';
    for (const tableName in SQLtables) {
        const tableData = SQLtables[tableName];
        const { foreignKeys, columns } = tableData;
        if (!foreignKeys || !isReferenceTable(foreignKeys, columns)) {
            queryType += generateTypes.queries(tableName, tableData); 
            mutationType += generateTypes.mutations(tableName, tableData);
            customType += generateTypes.custom(tableName, SQLtables);
        }
    }
    const types =
        `${'const typeDefs = `\n' + '  type Query {\n'}${queryType}  }\n\n` +
        `  type Mutation {${mutationType}  }\n\n` +
        `${customType}\`;\n\n`;

    return types;
}

module.exports = schema;