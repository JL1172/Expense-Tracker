/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sub-categories').delete()
  await knex('sub-categories').insert([
    {sub_category_name: 'Entertainment', category_id : 1},
    {sub_category_name: 'Personal', category_id : 1},
    {sub_category_name: 'Transportation', category_id : 1},
    {sub_category_name: 'Housing', category_id : 1},
    {sub_category_name: 'Health', category_id : 1},
    {sub_category_name: 'Utilities', category_id : 1},
    {sub_category_name: 'Net worth', category_id : 2},
  ]);
};
