const express = require('express');
const router = express.Router();
const postgreSQLController = require('./controllers/postgreSQLController');
const generateResolver = require('./generator/generatorResolver')
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

router.post('/schema',
    postgreSQLController.table,
    postgreSQLController.schemaGenerator,
    postgreSQLController.writeSchemaToFile,
    postgreSQLController.d3JSONGenerator,
    (req, res) => {
        // console.log(res.locals.schema);
        res.status(200).json({schema: res.locals.schema, visuals: res.locals.d3JSON})
    }
)
//routes for userstuff 
router.post('/login', userController.verifyUser, (req, res) => {
    // res.redirect('/home');
    res.status(200).send(req.session)
})

router.get('/github/auth', (req, res) => {
    const url = 'https://github.com/login/oauth/authorize?client_id=' + process.env.OAUTH_GITHUB_CLIENT;
    return res.redirect(url);
})
router.get('/github/callback', authController.getToken, authController.getUserInfo, authController.checkUser, authController.addUser, (req, res) => {
    res.status(200).send('OAuth Done');
})

router.post('/signup',userController.checkUser, userController.addUser, (req, res) => {
    // res.status(200).send(res.locals.users);
    res.status(200).send(req.session);
});
// 


module.exports = router;