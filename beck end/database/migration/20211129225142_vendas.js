exports.up = function(knex) {
    return knex.schema.createTable('vendas', function(table) {
        table.increments();

        table.integer('id_cliente').unsigned()notNullable();
        table.foreign('id_cliente').references('id').inTable('cliente');

        table.integer('id_produto').unsigned().notNullable();
        table.foreign('id_produto').references('id').inTable('produto');

        table.datetime('data_criacao', {precision: 6 }).dafaultTo(knex.fn.now(6))
        table.datetime('data_atualizacao', {precision: 6 }).defaultTo(knex.fn.now(6))
    })
};

exports.dow = function(knex) {

};



