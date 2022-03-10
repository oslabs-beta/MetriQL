const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./router');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');

const userController = require('./controllers/userController');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
})

// set up CORS for Cross-Origin-Resource-Sharing
app.use(cors());
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'locahost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// converts API responses to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.use('/auth', authRouter)
app.use('/profile', profileRouter)

app.use(cookieSession({
  maxAge: 7*24*60*60*1000,
  keys: [process.env.SESSION_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('*', (req, res) => res.status(404).send('Wrong Page, something went wrong'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler in unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Servers listening on ${PORT}`);
});

module.exports = app;