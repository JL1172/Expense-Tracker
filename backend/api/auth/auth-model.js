const db = require("../../database/db-config");

module.exports = {
    add,
}
async function add(user,other) {
    const {user_info_income, user_assets} = other;
    await db("users").insert(user);
    const resultId = await db('users').where({user_username : user.user_username}).first();
    // console.log(resultId);
    await db("user_information").insert({user_info_income : user_info_income,user_assets : user_assets, user_id : resultId.user_id});

} 