/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('category').delete()
  await knex('category').insert([
    { category_name: 'expenses' },
    { category_name: 'assets' },
  ]);
};
