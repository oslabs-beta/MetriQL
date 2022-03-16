<<<<<<< HEAD
const { makeExecutableSchema } = require('graphql-tools');
const { Pool } = require('pg');
<<<<<<< HEAD
<<<<<<< HEAD
const PG_URI = 'postgres://yxcpsnja:HHJUW2hbwYbmSTrvKVXLaz3VO0YRDxX1@castor.db.elephantsql.com/yxcpsnja';
=======
const PG_URI = 'postgres://hgokvgqx:8y0x9A3vgaIFSSCZMLDieF-LgoWlh_mi@castor.db.elephantsql.com/hgokvgqx';
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
const PG_URI = 'postgres://yxcpsnja:HHJUW2hbwYbmSTrvKVXLaz3VO0YRDxX1@castor.db.elephantsql.com/yxcpsnja';
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f

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
    people: [Person!]!
    person(_id: Int!): Person!
    films: [Film!]!
    film(_id: Int!): Film!
    planets: [Planet!]!
    planet(_id: Int!): Planet!
    species: [Species!]!
    speciesByID(_id: Int!): Species!
    vessels: [Vessel!]!
    vessel(_id: Int!): Vessel!
    starshipSpecs: [StarshipSpec!]!
    starshipSpec(_id: Int!): StarshipSpec!
<<<<<<< HEAD
<<<<<<< HEAD
    student: [Student!]!
    studentByID(_id: Int!): Student!
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    student: [Student!]!
    studentByID(_id: Int!): Student!
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
  }

  type Mutation {
    createPerson (
<<<<<<< HEAD
<<<<<<< HEAD
      name: String!,
=======
      gender: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      name: String!,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      species_id: Int,
      homeworld_id: Int,
      height: Int,
      mass: String,
      hair_color: String,
      skin_color: String,
      eye_color: String,
<<<<<<< HEAD
<<<<<<< HEAD
      birth_year: String,
      gender: String,
    ): Person!

    updatePerson(
      name: String!,
=======
      name: String!,
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      birth_year: String,
      gender: String,
    ): Person!

    updatePerson(
<<<<<<< HEAD
      gender: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      name: String!,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      species_id: Int,
      homeworld_id: Int,
      height: Int,
      _id: Int!,
      mass: String,
      hair_color: String,
      skin_color: String,
      eye_color: String,
<<<<<<< HEAD
<<<<<<< HEAD
      birth_year: String,
      gender: String,
=======
      name: String!,
      birth_year: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      birth_year: String,
      gender: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    ): Person!

    deletePerson(_id: ID!): Person!

    createFilm (
      director: String!,
      opening_crawl: String!,
      episode_id: Int!,
      title: String!,
      release_date: String!,
      producer: String!,
    ): Film!

    updateFilm(
      director: String!,
      opening_crawl: String!,
      episode_id: Int!,
      _id: Int!,
      title: String!,
      release_date: String!,
      producer: String!,
    ): Film!

    deleteFilm(_id: ID!): Film!

    createPlanet (
      orbital_period: Int,
      climate: String,
      gravity: String,
      terrain: String,
      surface_water: String,
      population: Int,
      name: String,
      rotation_period: Int,
      diameter: Int,
    ): Planet!

    updatePlanet(
      orbital_period: Int,
      climate: String,
      gravity: String,
      terrain: String,
      surface_water: String,
      population: Int,
      _id: Int!,
      name: String,
      rotation_period: Int,
      diameter: Int,
    ): Planet!

    deletePlanet(_id: ID!): Planet!

    createSpecies (
<<<<<<< HEAD
<<<<<<< HEAD
      eye_colors: String,
=======
      hair_colors: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      eye_colors: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      name: String!,
      classification: String,
      average_height: String,
      average_lifespan: String,
<<<<<<< HEAD
<<<<<<< HEAD
      hair_colors: String,
      skin_colors: String,
=======
      skin_colors: String,
      eye_colors: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      hair_colors: String,
      skin_colors: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      language: String,
      homeworld_id: Int,
    ): Species!

    updateSpecies(
<<<<<<< HEAD
<<<<<<< HEAD
      eye_colors: String,
=======
      hair_colors: String,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      eye_colors: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      name: String!,
      classification: String,
      average_height: String,
      average_lifespan: String,
<<<<<<< HEAD
<<<<<<< HEAD
      hair_colors: String,
      skin_colors: String,
      _id: Int!,
      language: String,
      homeworld_id: Int,
=======
=======
      hair_colors: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      skin_colors: String,
      _id: Int!,
      language: String,
      homeworld_id: Int,
<<<<<<< HEAD
      _id: Int!,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    ): Species!

    deleteSpecies(_id: ID!): Species!

    createVessel (
<<<<<<< HEAD
<<<<<<< HEAD
      manufacturer: String,
      name: String!,
      model: String,
=======
      cost_in_credits: Int,
      length: String,
      vessel_type: String!,
      model: String,
      manufacturer: String,
      name: String!,
      vessel_class: String!,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      manufacturer: String,
      name: String!,
      model: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      max_atmosphering_speed: String,
      crew: Int,
      passengers: Int,
      cargo_capacity: String,
      consumables: String,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      cost_in_credits: Int,
      vessel_class: String!,
      vessel_type: String!,
      length: String,
<<<<<<< HEAD
    ): Vessel!

    updateVessel(
      manufacturer: String,
      name: String!,
      model: String,
=======
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    ): Vessel!

    updateVessel(
      manufacturer: String,
      name: String!,
<<<<<<< HEAD
      vessel_class: String!,
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
      model: String,
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      max_atmosphering_speed: String,
      crew: Int,
      passengers: Int,
      cargo_capacity: String,
      consumables: String,
      _id: Int!,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      cost_in_credits: Int,
      vessel_class: String!,
      vessel_type: String!,
      length: String,
<<<<<<< HEAD
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    ): Vessel!

    deleteVessel(_id: ID!): Vessel!

    createStarshipSpec (
<<<<<<< HEAD
<<<<<<< HEAD
      MGLT: String,
      hyperdrive_rating: String,
      vessel_id: Int!,
    ): StarshipSpec!

    updateStarshipSpec(
      MGLT: String,
      hyperdrive_rating: String,
      vessel_id: Int!,
      _id: Int!,
    ): StarshipSpec!

    deleteStarshipSpec(_id: ID!): StarshipSpec!

    createStudent (
      first_name: String!,
      age: Int!,
      last_name: String!,
    ): Student!

    updateStudent(
      first_name: String!,
      _id: Int!,
      age: Int!,
      last_name: String!,
    ): Student!

    deleteStudent(_id: ID!): Student!
=======
      vessel_id: Int!,
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
      MGLT: String,
      hyperdrive_rating: String,
      vessel_id: Int!,
    ): StarshipSpec!

    updateStarshipSpec(
      MGLT: String,
      hyperdrive_rating: String,
      vessel_id: Int!,
      _id: Int!,
    ): StarshipSpec!

    deleteStarshipSpec(_id: ID!): StarshipSpec!
<<<<<<< HEAD
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======

    createStudent (
      first_name: String!,
      age: Int!,
      last_name: String!,
    ): Student!

    updateStudent(
      first_name: String!,
      _id: Int!,
      age: Int!,
      last_name: String!,
    ): Student!

    deleteStudent(_id: ID!): Student!
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
  }

  type Person {
    _id: Int
<<<<<<< HEAD
<<<<<<< HEAD
    name: String!
=======
    gender: String
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    name: String!
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    height: Int
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
<<<<<<< HEAD
<<<<<<< HEAD
    birth_year: String
    gender: String
=======
    name: String!
    birth_year: String
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    birth_year: String
    gender: String
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    films: [Film]
    vessels: [Vessel]
    species: [Species]
    planets: [Planet]
 }

  type Film {
    _id: Int
    director: String!
    opening_crawl: String!
    episode_id: Int!
    title: String!
    release_date: String!
    producer: String!
    planets: [Planet]
    people: [Person]
    vessels: [Vessel]
    species: [Species]
 }

  type Planet {
    _id: Int
    orbital_period: Int
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: Int
    name: String
    rotation_period: Int
    diameter: Int
    films: [Film]
    species: [Species]
    people: [Person]
 }

  type Species {
    _id: Int
<<<<<<< HEAD
<<<<<<< HEAD
    eye_colors: String
=======
    hair_colors: String
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    eye_colors: String
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    name: String!
    classification: String
    average_height: String
    average_lifespan: String
<<<<<<< HEAD
<<<<<<< HEAD
    hair_colors: String
    skin_colors: String
=======
    skin_colors: String
    eye_colors: String
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    hair_colors: String
    skin_colors: String
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    language: String
    people: [Person]
    films: [Film]
    planets: [Planet]
 }

  type Vessel {
    _id: Int
<<<<<<< HEAD
<<<<<<< HEAD
    manufacturer: String
    name: String!
    model: String
=======
    cost_in_credits: Int
    length: String
    vessel_type: String!
    model: String
    manufacturer: String
    name: String!
    vessel_class: String!
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
    manufacturer: String
    name: String!
    model: String
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    max_atmosphering_speed: String
    crew: Int
    passengers: Int
    cargo_capacity: String
    consumables: String
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    cost_in_credits: Int
    vessel_class: String!
    vessel_type: String!
    length: String
<<<<<<< HEAD
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    films: [Film]
    people: [Person]
    starshipSpecs: [StarshipSpec]
 }

  type StarshipSpec {
    _id: Int
    MGLT: String
    hyperdrive_rating: String
    vessels: [Vessel]
 }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
  type Student {
    _id: Int
    first_name: String!
    age: Int!
    last_name: String!
 }

<<<<<<< HEAD
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
`;



  const resolvers = {
    Query: {      

          person: (parent, args) => {
            const query = 'SELECT * FROM people WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          people: () => {
            const query = 'SELECT * FROM people';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          film: (parent, args) => {
            const query = 'SELECT * FROM films WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          films: () => {
            const query = 'SELECT * FROM films';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          planet: (parent, args) => {
            const query = 'SELECT * FROM planets WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          planets: () => {
            const query = 'SELECT * FROM planets';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          speciesByID: (parent, args) => {
            const query = 'SELECT * FROM species WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          species: () => {
            const query = 'SELECT * FROM species';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          vessel: (parent, args) => {
            const query = 'SELECT * FROM vessels WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          vessels: () => {
            const query = 'SELECT * FROM vessels';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },

          starshipSpec: (parent, args) => {
            const query = 'SELECT * FROM starship_specs WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          starshipSpecs: () => {
            const query = 'SELECT * FROM starship_specs';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f

          studentByID: (parent, args) => {
            const query = 'SELECT * FROM student WHERE _id = $1';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          student: () => {
            const query = 'SELECT * FROM student';
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
<<<<<<< HEAD
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    },

    Mutation: {
      
          createPerson: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'INSERT INTO people(name, species_id, homeworld_id, height, mass, hair_color, skin_color, eye_color, birth_year, gender) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
            const values = [args.name, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.birth_year, args.gender];
=======
            const query = 'INSERT INTO people(gender, species_id, homeworld_id, height, mass, hair_color, skin_color, eye_color, name, birth_year) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
            const values = [args.gender, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.name, args.birth_year];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'INSERT INTO people(name, species_id, homeworld_id, height, mass, hair_color, skin_color, eye_color, birth_year, gender) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
            const values = [args.name, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.birth_year, args.gender];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updatePerson: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'UPDATE people SET name=$1, species_id=$2, homeworld_id=$3, height=$4, mass=$5, hair_color=$6, skin_color=$7, eye_color=$8, birth_year=$9, gender=$10 WHERE _id = $11 RETURNING *';
            const values = [args.name, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.birth_year, args.gender, args._id];
=======
            const query = 'UPDATE people SET gender=$1, species_id=$2, homeworld_id=$3, height=$4, mass=$5, hair_color=$6, skin_color=$7, eye_color=$8, name=$9, birth_year=$10 WHERE _id = $11 RETURNING *';
            const values = [args.gender, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.name, args.birth_year, args._id];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'UPDATE people SET name=$1, species_id=$2, homeworld_id=$3, height=$4, mass=$5, hair_color=$6, skin_color=$7, eye_color=$8, birth_year=$9, gender=$10 WHERE _id = $11 RETURNING *';
            const values = [args.name, args.species_id, args.homeworld_id, args.height, args.mass, args.hair_color, args.skin_color, args.eye_color, args.birth_year, args.gender, args._id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deletePerson: (parent, args) => {
            const query = 'DELETE FROM people WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createFilm: (parent, args) => {
            const query = 'INSERT INTO films(director, opening_crawl, episode_id, title, release_date, producer) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
            const values = [args.director, args.opening_crawl, args.episode_id, args.title, args.release_date, args.producer];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateFilm: (parent, args) => {
            const query = 'UPDATE films SET director=$1, opening_crawl=$2, episode_id=$3, title=$4, release_date=$5, producer=$6 WHERE _id = $7 RETURNING *';
            const values = [args.director, args.opening_crawl, args.episode_id, args.title, args.release_date, args.producer, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteFilm: (parent, args) => {
            const query = 'DELETE FROM films WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createPlanet: (parent, args) => {
            const query = 'INSERT INTO planets(orbital_period, climate, gravity, terrain, surface_water, population, name, rotation_period, diameter) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            const values = [args.orbital_period, args.climate, args.gravity, args.terrain, args.surface_water, args.population, args.name, args.rotation_period, args.diameter];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updatePlanet: (parent, args) => {
            const query = 'UPDATE planets SET orbital_period=$1, climate=$2, gravity=$3, terrain=$4, surface_water=$5, population=$6, name=$7, rotation_period=$8, diameter=$9 WHERE _id = $10 RETURNING *';
            const values = [args.orbital_period, args.climate, args.gravity, args.terrain, args.surface_water, args.population, args.name, args.rotation_period, args.diameter, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deletePlanet: (parent, args) => {
            const query = 'DELETE FROM planets WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createSpecies: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'INSERT INTO species(eye_colors, name, classification, average_height, average_lifespan, hair_colors, skin_colors, language, homeworld_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            const values = [args.eye_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.hair_colors, args.skin_colors, args.language, args.homeworld_id];
=======
            const query = 'INSERT INTO species(hair_colors, name, classification, average_height, average_lifespan, skin_colors, eye_colors, language, homeworld_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            const values = [args.hair_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.skin_colors, args.eye_colors, args.language, args.homeworld_id];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'INSERT INTO species(eye_colors, name, classification, average_height, average_lifespan, hair_colors, skin_colors, language, homeworld_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            const values = [args.eye_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.hair_colors, args.skin_colors, args.language, args.homeworld_id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateSpecies: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'UPDATE species SET eye_colors=$1, name=$2, classification=$3, average_height=$4, average_lifespan=$5, hair_colors=$6, skin_colors=$7, language=$8, homeworld_id=$9 WHERE _id = $10 RETURNING *';
            const values = [args.eye_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.hair_colors, args.skin_colors, args.language, args.homeworld_id, args._id];
=======
            const query = 'UPDATE species SET hair_colors=$1, name=$2, classification=$3, average_height=$4, average_lifespan=$5, skin_colors=$6, eye_colors=$7, language=$8, homeworld_id=$9 WHERE _id = $10 RETURNING *';
            const values = [args.hair_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.skin_colors, args.eye_colors, args.language, args.homeworld_id, args._id];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'UPDATE species SET eye_colors=$1, name=$2, classification=$3, average_height=$4, average_lifespan=$5, hair_colors=$6, skin_colors=$7, language=$8, homeworld_id=$9 WHERE _id = $10 RETURNING *';
            const values = [args.eye_colors, args.name, args.classification, args.average_height, args.average_lifespan, args.hair_colors, args.skin_colors, args.language, args.homeworld_id, args._id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteSpecies: (parent, args) => {
            const query = 'DELETE FROM species WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createVessel: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'INSERT INTO vessels(manufacturer, name, model, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, cost_in_credits, vessel_class, vessel_type, length) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
            const values = [args.manufacturer, args.name, args.model, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables, args.cost_in_credits, args.vessel_class, args.vessel_type, args.length];
=======
            const query = 'INSERT INTO vessels(cost_in_credits, length, vessel_type, model, manufacturer, name, vessel_class, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
            const values = [args.cost_in_credits, args.length, args.vessel_type, args.model, args.manufacturer, args.name, args.vessel_class, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'INSERT INTO vessels(manufacturer, name, model, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, cost_in_credits, vessel_class, vessel_type, length) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
            const values = [args.manufacturer, args.name, args.model, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables, args.cost_in_credits, args.vessel_class, args.vessel_type, args.length];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateVessel: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'UPDATE vessels SET manufacturer=$1, name=$2, model=$3, max_atmosphering_speed=$4, crew=$5, passengers=$6, cargo_capacity=$7, consumables=$8, cost_in_credits=$9, vessel_class=$10, vessel_type=$11, length=$12 WHERE _id = $13 RETURNING *';
            const values = [args.manufacturer, args.name, args.model, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables, args.cost_in_credits, args.vessel_class, args.vessel_type, args.length, args._id];
=======
            const query = 'UPDATE vessels SET cost_in_credits=$1, length=$2, vessel_type=$3, model=$4, manufacturer=$5, name=$6, vessel_class=$7, max_atmosphering_speed=$8, crew=$9, passengers=$10, cargo_capacity=$11, consumables=$12 WHERE _id = $13 RETURNING *';
            const values = [args.cost_in_credits, args.length, args.vessel_type, args.model, args.manufacturer, args.name, args.vessel_class, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables, args._id];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'UPDATE vessels SET manufacturer=$1, name=$2, model=$3, max_atmosphering_speed=$4, crew=$5, passengers=$6, cargo_capacity=$7, consumables=$8, cost_in_credits=$9, vessel_class=$10, vessel_type=$11, length=$12 WHERE _id = $13 RETURNING *';
            const values = [args.manufacturer, args.name, args.model, args.max_atmosphering_speed, args.crew, args.passengers, args.cargo_capacity, args.consumables, args.cost_in_credits, args.vessel_class, args.vessel_type, args.length, args._id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteVessel: (parent, args) => {
            const query = 'DELETE FROM vessels WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          createStarshipSpec: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'INSERT INTO starship_specs(MGLT, hyperdrive_rating, vessel_id) VALUES($1, $2, $3) RETURNING *';
            const values = [args.MGLT, args.hyperdrive_rating, args.vessel_id];
=======
            const query = 'INSERT INTO starship_specs(vessel_id, MGLT, hyperdrive_rating) VALUES($1, $2, $3) RETURNING *';
            const values = [args.vessel_id, args.MGLT, args.hyperdrive_rating];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'INSERT INTO starship_specs(MGLT, hyperdrive_rating, vessel_id) VALUES($1, $2, $3) RETURNING *';
            const values = [args.MGLT, args.hyperdrive_rating, args.vessel_id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateStarshipSpec: (parent, args) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const query = 'UPDATE starship_specs SET MGLT=$1, hyperdrive_rating=$2, vessel_id=$3 WHERE _id = $4 RETURNING *';
            const values = [args.MGLT, args.hyperdrive_rating, args.vessel_id, args._id];
=======
            const query = 'UPDATE starship_specs SET vessel_id=$1, MGLT=$2, hyperdrive_rating=$3 WHERE _id = $4 RETURNING *';
            const values = [args.vessel_id, args.MGLT, args.hyperdrive_rating, args._id];
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
            const query = 'UPDATE starship_specs SET MGLT=$1, hyperdrive_rating=$2, vessel_id=$3 WHERE _id = $4 RETURNING *';
            const values = [args.MGLT, args.hyperdrive_rating, args.vessel_id, args._id];
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteStarshipSpec: (parent, args) => {
            const query = 'DELETE FROM starship_specs WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
          createStudent: (parent, args) => {
            const query = 'INSERT INTO student(first_name, age, last_name) VALUES($1, $2, $3) RETURNING *';
            const values = [args.first_name, args.age, args.last_name];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          updateStudent: (parent, args) => {
            const query = 'UPDATE student SET first_name=$1, age=$2, last_name=$3 WHERE _id = $4 RETURNING *';
            const values = [args.first_name, args.age, args.last_name, args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

          deleteStudent: (parent, args) => {
            const query = 'DELETE FROM student WHERE _id = $1 RETURNING *';
            const values = [args._id];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          },

<<<<<<< HEAD
=======
>>>>>>> 59a389c0929b5280e45f4434f4f6a792439e9c63
=======
>>>>>>> 0b9f658aa8916b2066db6b15ef7d0368d34c0f0f
    },
      
      Person: {
        
          films: (people) => {
            const query = 'SELECT * FROM films LEFT OUTER JOIN people_in_films ON films._id = people_in_films.film_id WHERE people_in_films.person_id = $1';
            const values = [people._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          species: (people) => {
            const query = 'SELECT species.* FROM species LEFT OUTER JOIN people ON species._id = people._id WHERE people._id = $1';
            const values = [people._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          planets: (people) => {
            const query = 'SELECT planets.* FROM planets LEFT OUTER JOIN people ON planets._id = people._id WHERE people._id = $1';
            const values = [people._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          vessels: (people) => {
            const query = 'SELECT * FROM vessels LEFT OUTER JOIN pilots ON vessels._id = pilots.vessel_id WHERE pilots.person_id = $1';
            const values = [people._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
      },

      Film: {
        
          planets: (films) => {
            const query = 'SELECT * FROM planets LEFT OUTER JOIN planets_in_films ON planets._id = planets_in_films.planet_id WHERE planets_in_films.film_id = $1';
            const values = [films._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          people: (films) => {
            const query = 'SELECT * FROM people LEFT OUTER JOIN people_in_films ON people._id = people_in_films.person_id WHERE people_in_films.film_id = $1';
            const values = [films._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          vessels: (films) => {
            const query = 'SELECT * FROM vessels LEFT OUTER JOIN vessels_in_films ON vessels._id = vessels_in_films.vessel_id WHERE vessels_in_films.film_id = $1';
            const values = [films._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          species: (films) => {
            const query = 'SELECT * FROM species LEFT OUTER JOIN species_in_films ON species._id = species_in_films.species_id WHERE species_in_films.film_id = $1';
            const values = [films._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
      },

      Planet: {
        
          films: (planets) => {
            const query = 'SELECT * FROM films LEFT OUTER JOIN planets_in_films ON films._id = planets_in_films.film_id WHERE planets_in_films.planet_id = $1';
            const values = [planets._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          species: (planets) => {
            const query = 'SELECT * FROM species WHERE homeworld_id $1';
            const values = [planets._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
          people: (planets) => {
            const query = 'SELECT * FROM people WHERE homeworld_id $1';
            const values = [planets._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
      },

      Species: {
        
          people: (species) => {
            const query = 'SELECT * FROM people WHERE species_id $1';
            const values = [species._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
          films: (species) => {
            const query = 'SELECT * FROM films LEFT OUTER JOIN species_in_films ON films._id = species_in_films.film_id WHERE species_in_films.species_id = $1';
            const values = [species._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          planets: (species) => {
            const query = 'SELECT planets.* FROM planets LEFT OUTER JOIN species ON planets._id = species._id WHERE species._id = $1';
            const values = [species._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
      },

      Vessel: {
        
          films: (vessels) => {
            const query = 'SELECT * FROM films LEFT OUTER JOIN vessels_in_films ON films._id = vessels_in_films.film_id WHERE vessels_in_films.vessel_id = $1';
            const values = [vessels._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          people: (vessels) => {
            const query = 'SELECT * FROM people LEFT OUTER JOIN pilots ON people._id = pilots.person_id WHERE pilots.vessel_id = $1';
            const values = [vessels._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          }, 
          starshipSpecs: (vessels) => {
            const query = 'SELECT * FROM starship_specs WHERE vessel_id $1';
            const values = [vessels._id];
            return db.query(query, values)
              .then(data => data.rows)
              .catch(err => new Error(err));
          },
      },

  }

  const schema = makeExecutableSchema({    
      typeDefs,    
      resolvers,
      });
  
      module.exports = schema;
=======
>>>>>>> 50d4dd5962d7934db7ad9b29988c976798af6df0
