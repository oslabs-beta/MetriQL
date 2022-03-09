const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');

router.get('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    (req, res) => {
        res.status(200).json({schema: res.locals.schema})
    })

    router.post('/schema-user',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    (req, res) => {
        res.status(200).json({schema: res.locals.schema})
    })


module.exports = router;