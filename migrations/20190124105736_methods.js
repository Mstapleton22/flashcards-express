
exports.up = function (knex, Promise) {
  return knex.schema.createTable('method', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.integer('description').notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('method')
};
