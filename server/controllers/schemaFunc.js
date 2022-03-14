const schemaImport = (uri) => {
    return (
      `const { makeExecutableSchema } = require('graphql-tools');\n` +
      `const { Pool } = require('pg');\n` +
      `const PG_URI = '${uri}';\n\n` +
      `const pool = new Pool({\n` +
      `  connectionString: PG_URI\n` +
      `});\n\n` +
      `const db = {};\n` +
      `db.query = (text,params, callback) => {
    console.log('executed query:', text)
    return pool.query(text, params, callback) \n};\n\n`
    );
  };
  
  const schemaExport = () => {
    return `  const schema = makeExecutableSchema({    
      typeDefs,    
      resolvers,
      });
  
      module.exports = schema;`;
  };

  module.exports = {
      schemaImport,
      schemaExport
  }