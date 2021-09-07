
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
  await knex('cars').insert([
        { vin: '2342kj23l4j', make: 'toyota', model: 'tacoma', milage: 20000, title: 'clean', transmission: 'automatic' },
        { vin: 'o45i6u890uwet', make: 'nissan', model: 'altima', milage: 500000, title: 'clean', transmission: 'automatic' },
        { vin: '3425oiu890tut', make: 'ford', model: 'ranger', milage: 10000, title: 'salvage', transmission: 'manuel' }
      ]);
};
