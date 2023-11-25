const db = require("../../database/db-config");

async function findUserInfo(id) {
    const result = await db("users as u")
        .join("user_information as q", "u.user_id", "q.user_id")
        .select("u.user_username", "q.user_info_income", "q.user_assets")
        .where("u.user_id", id);
    return result;
}
async function updateUserInfo(changes) {
    await db("user_information")
        .update(changes).where("user_id", changes.user_id);
    return await db("users as u")
        .join("user_information as q", "u.user_id", "q.user_id")
        .select("u.user_username", "q.user_info_income", "q.user_assets")
        .where("u.user_id", changes.user_id);
}
async function updatePassword(changes,id) {
    await db("users").update(changes).where({user_id : id}); 
}
module.exports = {
    findUserInfo,
    updateUserInfo,
    updatePassword
}