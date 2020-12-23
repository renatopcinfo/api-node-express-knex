
exports.up = function (knex) {
  return knex.schema.createTable('pedidos', table => {
      table.increments('id').primary()
      table.integer('numero').notNull()
      table.integer('totalProdutos').notNull()
      table.decimal('valorTotal').notNull()
      table.date('data_compra').notNull()
      table.date('pedido_concluido').notNull()
      table.date('previsao_entrega').notNull()
      table.integer('fk_cliente').notNull().unsigned()
      table.foreign('fk_cliente').references('id').inTable('clientes')
      table.integer('fk_produto').notNull().unsigned()
      table.foreign('fk_produto').references('id').inTable('produtos')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pedidos')
};
