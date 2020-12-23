// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'loja',
    user: 'root',
    password: 'admin'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
