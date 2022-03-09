const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./router')

const app = express();
const PORT = 3001;

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

app.use('*', (req, res) => res.status(404).send('Wrong Page'));

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