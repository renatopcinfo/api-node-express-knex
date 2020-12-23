
exports.up = function (knex) {
  return knex.schema.createTable('clientes', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('endereco').notNull()
      table.string('telefone')
      table.string('email').notNull()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('clientes')
};
