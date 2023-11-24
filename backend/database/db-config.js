const knex = require('knex');

const configuration = require("../knexfile");

const env = process.env.NODE_ENV || "development";

module.exports = knex(configuration[env]);