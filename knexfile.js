module.exports = {

  development: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: 'postgres://localhost/jsflashcards'
  },
  production: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: process.env.DATABASE_URL
  }
}
