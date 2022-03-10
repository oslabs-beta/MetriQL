const { Pool } = require("pg");
// const CryptoJS = require("crypto-js");
require('dotenv').config();
const fs = require('fs')
const pgQuery = fs.readFileSync('server/query/tables.sql', 'utf8')
const schema = require('../generator/schema.js')

const PG_URI_STARWARS = process.env.PG_URI_STARWARS;

// const decryptURI = (encryptedUserURI) => {
//     const data = CryptoJS.AES.decrypt(encryptedUserURI, process.env.SECRETKEY);
//     const decryptedURI = data.toString(CryptoJS.enc.Utf8);
//     return decryptedURI;
// }

const postgreSQLController = {};

postgreSQLController.table = async (req, res, next) => {
    let postURI;

    // req.body.uri ? (postURI = decryptURI(req.body.uri)) : (postURI = PG_URI_STARWARS)
    req.body.uri ? (postURI = (req.body.uri)) : (postURI = PG_URI_STARWARS)
//post test:"uri" "uri"
    const db = new Pool({ connectionString: postURI });
    try {
        const result = await db.query(pgQuery);
        res.locals.SQLtables = result.rows[0].tables;
        console.log('tables first')
        next();
    } catch (err) {
        return next({
            log: `Error occurred in postgreSQLController.getSchema ERROR: ${err}`,
            message: { err: 'Error occured in postgreSQLController.getSchema. Check server log for more detail' },
        })
    }
}

postgreSQLController.schemaGenerator =  (req, res, next) => {
    const { SQLtables } = res.locals;
    try {
        const types = schema.typeGenerator(SQLtables);
        res.locals.schema = types;
        console.log('this should be second')
        return next();
    } catch (err) {
        return next({
            log: `Error occurred in postgreSQLController.schemaGenerator ERROR: ${err}`,
            message: { err: `Error occured in postgreSQLControllers.schemaGenerator. Check server log for more detail. ${err}` },
        })
    }
}


module.exports = postgreSQLController