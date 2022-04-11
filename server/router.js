const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');

router.post('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    postgreSQLController.writeSchemaToFile,
    postgreSQLController.d3JSONGenerator,
    (req, res) => {
        res.status(200).json({schema: res.locals.schema, visuals: res.locals.d3JSON})
    }
)

module.exports = router;