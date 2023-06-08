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
    connection: "postgres://puricure:cqZCLsgJWI9S1aOXBBdr11bN48N8oOmb@dpg-ci0jsee4dad5j71jujr0-a/puricure",
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
