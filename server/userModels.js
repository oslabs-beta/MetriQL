const { Pool } = require('pg');

const pool = new Pool({
    //REPLACE WITH USER DB
    connectionString: 'postgres://ctniteoy:9pZ9z_n--mb97r4kBmHel6pUvIvARp5r@salt.db.elephantsql.com/ctniteoy'
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
      }
};