//authController handles authorizing/adding user with OAuth 
const axios = require('axios');
const db = require('../userModels.js');
require('dotenv').config();

const authController = {};

//sends request token to github to authorize user 
authController.getToken = async (req, res, next) => {
    console.log('token running')
    const requestToken = req.query.code;
    console.log(req.query);
    const url = `https://github.com/login/oauth/access_token?client_id=${process.env.OAUTH_GITHUB_CLIENT}&client_secret=${process.env.OAUTH_GITHUB_SECRET}&code=${requestToken}&scope=repo`
    let token; 
    try {
        token = await axios({
            method: 'POST',
            url, 
            headers: { accept: 'application/json'},
        })
        token = token.data;
        res.locals.access_token = token.access_token;
        return next();
    }
    catch (err) {
        return next({
            log: `Error in authController.getToken: ${err}`,
            status: 500, 
            message: {err: 'Whoops! An error occurred'}
        })
    }
}
//gets user data from github to store for future use 
authController.getUserInfo = async(req, res, next) => {
    const url = 'https://api.github.com/user';
    let userInfo;
    try {
        userInfo = await axios({
            method: 'GET', 
            url,
            headers: {
                Accept: 'application/json',
                Authorization: 'token ' + res.locals.access_token
            }
        });
        res.locals = userInfo.data;
        req.session.loggedin = true;
        console.log(req.session)
        return next();
    }
    catch (err) {
        return next({
            log: `Error in authController.getUserInfo: ${err}`,
            status: 500, 
            message: {err: 'Whoops! An error occurred'}
        })
    }
}

//check if user exists in database 
authController.checkUser = (req, res, next) => {
    const {login} = res.locals
    console.log(login)
    const queryString = 'SELECT * FROM users WHERE username = $1'
    const params = [login];
    db.query(queryString, params)
      .then(data => {
        //   console.log(data.rows)
          if (data.rows.length) {
              res.redirect('http://localhost:3000/main')
          }
          else {
              return next();
          }
      })
        
      .catch((err) => {
        //   console.log('adding user')
        return next({
          log: `authController.checkUser: ERROR: ${err} `,
          message: {
            err: `${err} at authController.checkUser`
          }
        });
    })
}

//if user does not exist (as gathered from previous middleware, which is above) add to sql database
authController.addUser = (req, res, next) => {
    const {login, name} = res.locals;
    const queryString = 'INSERT INTO users (username, firstname) VALUES ($1, $2)';
    const params = [login, name];

    db.query(queryString, params) 
        .then(result => {
            return next();
        })
        .catch(err => {
            return next({
                log: `authController.addUser: ERROR: ${err} `,
                message: {
                  err: `${err} at authController.addUser`
                }
              })
        })
}
module.exports=authController;