
exports.up = function (knex) {
  return knex.schema.createTable('produtos', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('descricao').notNull()
      table.string('categoria')
      table.integer('preco').notNull()
      table.integer('quantidade').notNull()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('produtos')
};
