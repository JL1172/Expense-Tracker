/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_information').delete()
  await knex('user_information').insert([
    { user_info_income: 34000, user_id : 1, user_assets : 100000},
    { user_info_income: 58000, user_id : 2, user_assets : 500000},
    { user_info_income: 70000, user_id : 3, user_assets : 170000}
  ]);
};
