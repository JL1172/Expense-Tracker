// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : "localhost",
      port : "1108",
      database: 'user-db',
      user:     'postgres',
      password: 'ozg1zr9FVeGzXXcD'
    },
    migrations: {
      directory : "./database/migrations"
    },
    seeds : {
      directory : "./database/seeds"
    }
  },


};
