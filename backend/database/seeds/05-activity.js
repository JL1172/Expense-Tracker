/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activity').delete()
  await knex('activity').insert([
    {sub_category_id: 3, user_id : 1, activity_amount : 50000, activity_description : "bought car"},
    {sub_category_id: 4, user_id : 1, activity_amount : 4000, activity_description : "rent"},
    {sub_category_id: 4, user_id : 3, activity_amount : 1500, activity_description : "security-deposit"},
    {sub_category_id: 6, user_id : 2, activity_amount : 400, activity_description : "electric bill"},
    {sub_category_id: 1, user_id : 2, activity_amount : 15, activity_description : "netflix subscription"},
    {sub_category_id: 5, user_id : 1, activity_amount : 150, activity_description : "doctor visit"},
    {sub_category_id: 5, user_id : 1, activity_amount : 500, activity_description : "dentist"},
  ]);
};
