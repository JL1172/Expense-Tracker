const db = require("../../database/db-config");

async function findAll(query,user_id) {
    const {page = 1, limit = 10, sortby = "created_at", sortdir = "asc"} = query;
    const offset = limit * (page - 1);
    const result = await db("activity as a")
    .join("sub-categories as s","s.sub_category_id","a.sub_category_id")
    .join("users as u","u.user_id","a.user_id")
    .join("category as c","c.category_id","s.category_id")
    .select("a.activity_amount", "a.created_at", "s.sub_category_name","c.category_name","u.user_username","a.activity_description")
    .limit(limit)
    .orderBy(sortby,sortdir)
    .offset(offset)
    .where('a.user_id',Number(user_id.subject[0].user_id))
    return result;
}

module.exports = {
    findAll,
}