const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');
const generateResolver = require('./generator/generatorResolver')

//our starwars demo 
router.get('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    postgreSQLController.writeSchemaToFile,
    (req, res) => {
        console.log(res.locals.schema);
        res.status(200).json({schema: res.locals.schema})
    }
)

router.post('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    postgreSQLController.writeSchemaToFile,
    (req, res) => {
        // console.log(res.locals.schema);
        res.status(200).json({schema: res.locals.schema})
    }
)

 //user provided uri
router.post('/schema-user',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    (req, res) => {
        res.status(200).json({schema: res.locals.schema})
    }
)


module.exports = router;