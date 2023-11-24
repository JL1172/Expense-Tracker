/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').delete()
  await knex('users').insert([
    { user_username: 'jacoblang11', user_password: "$2a$10$Is9BHF2GSzOg9oW5v1Teh.osx0et9bTXmMf4MPBvEfpnU5.kxwrCO" },
    { user_username: 'alainalang11', user_password: "$2a$10$CfXen1lfUD2AIISxeI9KD.qCQHQedUCuLUJ6Qi37tFxEunl528scG" },
    { user_username: 'patricklang11', user_password: "$2a$10$dT3yLCojZJKWf8.N6Uj0gOd68G5HEa032p1w3oygJKFtUREgszzNe" }
  ]);
};
