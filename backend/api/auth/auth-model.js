const db = require("../../database/db-config");

module.exports = {
    add,
}
async function add(user) {
    await db("users").insert(user); 
} 