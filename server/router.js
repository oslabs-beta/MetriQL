const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');
const generateResolver = require('./generator/generatorResolver')
const userController = require('./controllers/userController');

router.post('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    postgreSQLController.writeSchemaToFile,
    (req, res) => {
        // console.log(res.locals.schema);
        res.status(200).json({schema: res.locals.schema})
    }
)
//routes for userstuff 
router.post('/login', userController.verifyUser, (req, res) => {
    res.redirect('/home');
    // res.status(200).send(res.locals.user)
})

router.post('/signup',userController.checkUser, userController.addUser, (req, res) => {
    // res.status(200).send(res.locals.users);
    res.redirect('/home');
});

//personalized user page | not mantaining session on postman; use to send persnal pages
router.use('/home', (req, res) => {
    // res.status(200).send('Welcome Back,' + req.session.username + '!')
    res.status(200).send(req.session)

})
// 


module.exports = router;