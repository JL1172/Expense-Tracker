/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activity').delete()
  await knex('activity').insert([
    {category_id: 1, user_id : 1, activity_amount : 50000},
    {category_id: 1, user_id : 2, activity_amount : 4000},
    {category_id: 1, user_id : 3, activity_amount : 3000}
  ]);
};
