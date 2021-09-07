exports.up = async function (knex) {
  await knex.schema.createTable('cars', table =>{
    table.increments()
    table.text('vin',128).unique().notNullable()
    table.text('make', 128).notNullable()
    table.text('model', 128).notNullable()
    table.decimal('milage').notNullable()
    table.text('title')
    table.text('transmission')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
