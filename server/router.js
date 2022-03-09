const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');

router.get('/schema',
    postgreSQLController.table,
    // postgreSQLController.schemaGenerator,
    (req, res) => {
        res.status(200).json(res.locals.SQLtables)
    })


module.exports = router;