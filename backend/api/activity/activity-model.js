const db = require("../../database/db-config");

async function findAll(query,user_id) {
    const {page = 1, limit = 10, sortby = "created_at", sortdir = "asc"} = query;
    const offset = limit * (page - 1);
    const result = await db("activity as a")
    .join("sub-categories as s","s.sub_category_id","a.sub_category_id")
    .join("users as u","u.user_id","a.user_id")
    .join("category as c","c.category_id","s.category_id")
    .select("a.activity_description","a.activity_amount","u.user_id","u.user_username","c.category_id","c.category_name","s.sub_category_id","s.sub_category_name")
    .limit(limit)
    .orderBy(sortby,sortdir)
    .offset(offset)
    .where('a.user_id',Number(user_id.subject[0].user_id))
    return result;
}

async function addActivity(userBody,activity) {
    const {activity_description,activity_amount,sub_category_id} = activity;
    const user_id = userBody.subject[0].user_id;
    await db("activity").insert({sub_category_id,user_id,activity_amount,activity_description});
    return activity;
}
module.exports = {
    findAll,
    addActivity
}