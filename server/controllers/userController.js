const User = require('../userModel');

const UserController = {};

// Create a new user in the Database
UserController.createUser = (req, res, next) => {
  User.create({
    id: req.body.id,
    displayName: req.body.displayName,
    userName: req.body.userName,
    photo: req.body.photo
  })
    .then((response) => {
      console.log('createUser controller query response: ', response);
      res.locals.user = response;
      return next();
    })
    .catch((err) => {
      return next({
        log: `UserController.createUser: ERROR ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in UserController.createUser. Check server logs for more details.'}
      });
    });
};

// Get a user from the database and send it in the response
UserController.getUser = (req, res, next) => {
  console.log('req.params: ', req.params);
  console.log('req.body: ', req.body);
  User.findOne({
    id: req.params.id,
  })
    .then(data => {
      // console.log('data ', data);
      res.locals.user = data;
      return next();
    })
    .catch((err) => {
      return next({
        status: 400,
        log: `UserController.getUser: ERROR ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in UserController.getUser. Check server logs for more details.'}
      });
    });
};

module.exports = UserController;
