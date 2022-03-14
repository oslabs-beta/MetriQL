const { makeExecutableSchema } = require('graphql-tools');
const { Pool } = require('pg');
const PG_URI = 'postgres://cxkzzkoy:MIDAh9nRag784pI_1aA2JcZOa6OHIArN@salt.db.elephantsql.com/cxkzzkoy';

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
    post: [Post!]!
    postByID(_id: Int!): Post!
  }

  type Mutation {
    createPost (
      name: String!,
      rating: Int!,
      thumb: String!,
      notes: String!,
      imageurl: String!,
      linkurl: String!,
    ): Post!

    updatePost(
      name: String!,
      rating: Int!,
      thumb: String!,
      notes: String!,
      imageurl: String!,
      linkurl: String!,
      _id: Int!,
    ): Post!

    deletePost(_id: ID!): Post!
  }

  type Post {
    _id: Int
    name: String!
    rating: Int!
    thumb: String!
    notes: String!
    imageurl: String!
    linkurl: String!
 }

`;



  const resolvers = {
    Query: {      

          postByID: (parent, args) => {
            const query = 'SELECT * FROM post WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          post: () => {
            const query = 'SELECT * FROM post';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
    },

    Mutation: {
      
          createPost: (parent, args) => {
            const query = 'INSERT INTO post(name, rating, thumb, notes, imageurl, linkurl) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
            const values = [args.name, args.rating, args.thumb, args.notes, args.imageurl, args.linkurl];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updatePost: (parent, args) => {
            const query = 'UPDATE post SET name=$1, rating=$2, thumb=$3, notes=$4, imageurl=$5, linkurl=$6 WHERE _id = $7 RETURNING *';
            const values = [args.name, args.rating, args.thumb, args.notes, args.imageurl, args.linkurl, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deletePost: (parent, args) => {
            const query = 'DELETE FROM post WHERE _id = $1 RETURNING *';
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