const express = require('express');
const profileRouter = express.Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        console.log('user not logged in')
        res.redirect('/auth/login');
    } else {
        next();
    }
}

profileRouter.get('/', authCheck, (req, res) => {
    console.log('you made it')
    // res.send('you are here')
    // res.status(200).json(req.user);
    console.log('req.user ', req.user);
    res.status(200).send('you are logged in ', req.user)
})

module.exports = profileRouter;