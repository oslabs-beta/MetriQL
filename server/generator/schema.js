const generateTypes = require('./generateTypes');
const generateResolver = require('./generatorResolver')
const { isReferenceTable } = require('./resolverFunc');

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

schema.resolverGenerator = (SQLtables) => {
    let queryResolver = '';
    let mutationResolver = '';
    let customResolver = '';
    for (const tableName in SQLtables) {
        const tableData = SQLtables[tableName]
        const { foreignKeys, columns } = tableData; 
        if (!foreignKeys || !isReferenceTable(foreignKeys, columns)) {
            console.log('2.1')
            queryResolver += generateResolver.queries(tableName, tableData); 
            console.log('2.2')
            mutationResolver += generateResolver.mutations(tableName, tableData);
            console.log('2.3')
            customResolver += generateResolver.custom(tableName, SQLtables);
        }
    }
    const resolvers = 
    '\n  const resolvers = {\n' +
    '    Query: {' +
    `      ${queryResolver}\n` +
    '    },\n\n' +
    '    Mutation: {\n' +
    `      ${mutationResolver}\n` +
    '    },\n' +
    `      ${customResolver}\n  }\n`;

    return resolvers;
}

module.exports = schema;
