const { makeExecutableSchema } = require('graphql-tools');
const { Pool } = require('pg');
const PG_URI = 'postgres://guzcpfcy:BzuOncQLCPSwk5ktxTKEnGFX8EqeGxRF@jelani.db.elephantsql.com/guzcpfcy';

const pool = new Pool({
  connectionString: PG_URI
});

const db = {};
db.query = (text,params, callback) => {
    console.log('executed query:', text)
    return pool.query(text, params, callback) 
};


const typeDefs = `
  type Query {
    task: [Task!]!
    taskByID(_id: Int!): Task!
    tasks: [Task!]!
    task(_id: Int!): Task!
  }

  type Mutation {
    createTask (
      item: String,
      created_at: String,
    ): Task!

    updateTask(
      item: String,
      created_at: String,
      _id: Int!,
    ): Task!

    deleteTask(_id: ID!): Task!

    createTask (
      item: String,
      created_at: Int,
    ): Task!

    updateTask(
      item: String,
      _id: Int!,
      created_at: Int,
    ): Task!

    deleteTask(_id: ID!): Task!
  }

  type Task {
    _id: Int
    item: String
    created_at: String
 }

  type Task {
    _id: Int
    item: String
    created_at: Int
 }

`;



  const resolvers = {
    Query: {      

          taskByID: (parent, args) => {
            const query = 'SELECT * FROM task WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          task: () => {
            const query = 'SELECT * FROM task';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          task: (parent, args) => {
            const query = 'SELECT * FROM tasks WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          tasks: () => {
            const query = 'SELECT * FROM tasks';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
    },

    Mutation: {
      
          createTask: (parent, args) => {
            const query = 'INSERT INTO task(item, created_at) VALUES($1, $2) RETURNING *';
            const values = [args.item, args.created_at];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateTask: (parent, args) => {
            const query = 'UPDATE task SET item=$1, created_at=$2 WHERE _id = $3 RETURNING *';
            const values = [args.item, args.created_at, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteTask: (parent, args) => {
            const query = 'DELETE FROM task WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createTask: (parent, args) => {
            const query = 'INSERT INTO tasks(item, created_at) VALUES($1, $2) RETURNING *';
            const values = [args.item, args.created_at];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateTask: (parent, args) => {
            const query = 'UPDATE tasks SET item=$1, created_at=$2 WHERE _id = $3 RETURNING *';
            const values = [args.item, args.created_at, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteTask: (parent, args) => {
            const query = 'DELETE FROM tasks WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

    },
      
  }

  const schema = makeExecutableSchema({    
      typeDefs,    
      resolvers,
      });
  
      module.exports = schema;