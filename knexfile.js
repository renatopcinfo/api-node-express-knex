// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'cinema',
    user: 'root',
    password: 'admin'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
