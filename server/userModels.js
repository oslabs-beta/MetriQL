const { Pool } = require('pg');

const pool = new Pool({
    //REPLACE WITH USER DB
    connectionString: process.env.POSTGRES_URL 
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
      }
};