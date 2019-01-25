const environment = process.env.NODE_ENV || 'development';  //only matters when deploying
const knexConfig = require('./knexfile')[environment]; //going to knexfile.js and grabbing connection
// knexConfig grabs the object from the ./knexfile and stores it in the variable. THEN it creates a key value pair with the string in the const environment
const db = require('knex')(knexConfig);

module.exports = db;

// this code could be in the app.js
// maybe a staging environent but not this one