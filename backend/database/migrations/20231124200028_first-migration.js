/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable("users",table => {
    table.increments("user_id").primary();
    table.string("user_username").unique().notNullable();
    table.string("user_password").notNullable();
  })
  .createTable("category", table => {
    table.increments("category_id").primary();
    table.string("category_name").unique().notNullable();
  })
  .createTable("sub-categories",table => {
    table.increments("sub_category_id").primary();
    table.string("sub_category_name").notNullable().unique();
    table.integer("category_id")
    .unsigned()
    .notNullable()
    .references("category_id")
    .inTable("category")
    .onDelete("RESTRICT")
    .onUpdate("RESTRICT")
  })
  .createTable("user_information",table => {
    table.increments("user_info_id").primary();
    table.integer("user_info_income").notNullable();
    table.integer("user_id")
    .unsigned()
    .notNullable()
    .references("user_id")
    .inTable("users")
    .onDelete("RESTRICT")
    .onUpdate("RESTRICT");
    table.integer("user_assets").notNullable();
  })
  .createTable("activity",table => {
    table.increments("activity_id").primary();
    table.integer("sub_category_id")
    .unsigned()
    .notNullable()
    .references("sub_category_id")
    .inTable("sub-categories")
    .onDelete("RESTRICT")
    .onUpdate("RESTRICT");
    table.integer("user_id")
    .unsigned()
    .notNullable()
    .references("user_id")
    .inTable("users")
    .onDelete("RESTRICT")
    .onUpdate("RESTRICT");
    table.float("activity_amount").notNullable();
    table.string("activity_description").notNullable();
    table.dateTime("created_at",{ precision: 6 }).defaultTo(knex.fn.now(6));

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists("activity")
  .dropTableIfExists("user_information")
  .dropTableIfExists("sub-categories")
  .dropTableIfExists("category")
  .dropTableIfExists("users")
};
