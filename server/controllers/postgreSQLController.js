const { Pool } = require("pg");
const CryptoJS = require("crypto-js");
const fs = require('fs')
const pgQuery = fs.readFileSync('server/query/tables.sql', 'utf8')
const schema = require('../generator/schema.js')
const { schemaImport, schemaExport } = require('./schemaFunc')
const path = require('path');
require('dotenv').config();



const PG_URI_STARWARS = process.env.PG_URI_STARWARS;

const decryptURI = (encryptedUserURI) => {
    const data = CryptoJS.AES.decrypt(encryptedUserURI, process.env.SECRETKEY);
    const decryptedURI = data.toString(CryptoJS.enc.Utf8);
    return decryptedURI;
};

const postgreSQLController = {};


postgreSQLController.table = async (req, res, next) => {
    let postURI;
// postURI = decryptURI(req.body.uri)
    req.body.uri ? (postURI = req.body.uri) : (postURI = PG_URI_STARWARS)
    // let postURI = req.body.uri;
    // req.body.uri ? (postURI = decryptURI(req.body.uri)) : (postURI = PG_URI_STARWARS)
    // req.body.uri ? (postURI = (req.body.uri)) : (postURI = PG_URI_STARWARS)
//post test:"uri" "uri"

res.locals.URI = postURI;
    const db = new Pool({ connectionString: postURI });
    try {
        const result = await db.query(pgQuery);
        res.locals.SQLtables = result.rows[0].tables;
        next();
    } catch (err) {
        return next({
            log: `Error occurred in postgreSQLController.getSchema ERROR: ${err}`,
            message: { err: `Error occured in postgreSQLController.getSchema. Check server log for more detail ${err}` },
        })
    }
} 

postgreSQLController.schemaGenerator =  (req, res, next) => {
    const { SQLtables } = res.locals;
    try {
        const types = schema.typeGenerator(SQLtables);
        const resolvers = schema.resolverGenerator(SQLtables);
        res.locals.schema = { types, resolvers };
        next();
    } catch (err) {
        return next({
            log: `Error occurred in postgreSQLController.schemaGenerator ERROR: ${err}`,
            message: { err: `Error occured in postgreSQLControllers.schemaGenerator. Check server log for more detail. ${err}` } 
        })
    }
}

postgreSQLController.writeSchemaToFile = (req, res, next) => {
    try {
        console.log('111')
        const { URI } = res.locals;
        console.log( URI )
        const schemaImportText = schemaImport(URI);
        console.log('result')
        const schemaExportText = schemaExport();
        console.log('first')
        const schemaFile =
            schemaImportText +
            '\n' +
            res.locals.schema.types +
            '\n' +
            res.locals.schema.resolvers +
            '\n' +
            schemaExportText;

            console.log('second')
        fs.writeFileSync(
            path.resolve(__dirname, '../graphQLServer/schema.js'),
            schemaFile
        );
            console.log('third');
        return next();
    } catch (err) {
        const errObj = {
            log: `Error in writeSchemaToFile: ${err}`,
            status: 400,
            message: { err: {err} },
        };
        return next(errObj);
    }
};


module.exports = postgreSQLController