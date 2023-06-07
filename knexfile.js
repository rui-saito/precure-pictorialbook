// Update with your config settings.

require("dotenv").config({
  path: "./.env",
})
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'puricure',
      user: 'saitorui',
    },
    migrations: {
      directory: "./db/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
  production: {
    client: "postgresql",
    // connection: process.env.DATABASE_URL,
    connection: "postgres://bitcruiser:QYEKng4qTz0UOoD5L9JpLHQLBxZPlZTY@dpg-chsc6rm7avjdbigldufg-a/buying_list",
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
