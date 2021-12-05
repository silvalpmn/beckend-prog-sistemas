
exports.up = function(knex) {
    knex.schema.createtable('users', function (table) {
        table.increments('id');
        table.string('name');notNullable();
        table.string('email');notNullable();
        table.string('celular');notNullable();
        table.string('profisao'),nullable();
        table.string('uf', 2).notNullable();
    })
};            

exports.down = function(knex) {
    knex.schema.dropTable('pessoas');
  
};
