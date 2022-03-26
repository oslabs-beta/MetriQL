const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./router')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphQLServer/schema');
const session = require('express-session');

const app = express();
const PORT = 3001;

app.use(cors());

const oneDay = 1000 * 60 * 60 * 24;
//initializing session for user 
app.use(session({
  secret: 'secret',
  resave: false,
  cookie: { maxAge: oneDay },
  //prevents a new session when a new proprety is added
  saveUninitialized: false,
}))
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql',
  graphqlHTTP({
   schema ,
    graphiql: true,
  })
);

// app.use('/auth', authRouter);

app.use('/', router)

app.use('*', (req, res) => res.status(404).send('Wrong Page, something is not right'));

app.use((err, req, res, next) => {
  console.log(err)
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