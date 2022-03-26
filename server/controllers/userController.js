//userController handles manual (non oAuth) user login

const db = require('../userModels.js');
const session = require('express-session');
const bcrypt = require ('bcryptjs');
const saltRounds = 10;
const userController = {};

userController.verifyUser = (req, res, next) => {
    const {username, password} = req.body;
    console.log(req.body)
        //attempt async
    // bcrypt.hash(password, saltRounds, (err, hash) => {
    //     if (err) console.log(`unable to create hash due to ${err}`)
    //     else {
    //         password = hash;
    //         console.log(password)
    //     }
    // })
    const values = [username, password];
    const queryString = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    db.query(queryString, values)
        .then(data => {
            if (data.rows.length) {
                req.session.loggedin = true;
                req.session.username = username;
                console.log(req.session)
                return next();
            }
            else {
                req.session = false;
                return next();
            }
        })
        .catch(err => {
            return next({err})
        })    
}

userController.checkUser = (req, res, next) => {
    const {username} = req.body;
    const queryString = 'SELECT * FROM users WHERE username = $1'
    const params = [username];
    db.query(queryString, params)
      .then(data => {
          console.log(data.rows)
          //possibly add option to sign in 
          if (data.rows.length) res.send('user already exists')
          else return next();
      })
      //clean up
      .catch((err) => {
        return next({
          log: `userController.checkUser: ERROR: ${err} `,
          message: {
            err: `${err} at userController.checkUser`
          }
        });
    })
}

userController.addUser = (req, res, next) => {
    const {firstname, lastname, username, password} = req.body;
    const queryString = 'INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)';
    const params = [firstname, lastname, username, password];

    db.query(queryString, params) 
        .then(result => {
            // res.locals.user = result.rows[0]
            res.session.Loggedin = true;
            res.session.username = username;
            return next();
        })
        //clean up
        .catch(err => {
            return next({
                log: `userController.addUser: ERROR: ${err} `,
                message: {
                  err: `${err} at userController.addUser`
                }
              })
        })
}


module.exports=userController;