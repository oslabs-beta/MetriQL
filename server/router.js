const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');

router.get('/',
    postgreSQLController.table,
    // console.log(res.locals.schema),
    (req, res) => {
        res.status(200).json(res.locals.schema)
    })

module.exports = router;