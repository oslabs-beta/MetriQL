const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

// auth login //
authRouter.get('/login', (req, res) => {
    res.render('login')
})

// auth logout
authRouter.get('/logout', (req, res) => {
    // handle with passsport
    res.send('logging out');
})

// auth with github
authRouter.get('/github', passport.authenticate('github', {
    scope: ['profile']
}))

// callback route for github to redirect back to
authRouter.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    console.log(req.user)
    //store req.user in local storage and clear when they log out
    res.send(req.user).redirect('/profile')
})

module.exports = authRouter;