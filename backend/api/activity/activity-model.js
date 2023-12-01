const db = require("../../database/db-config");

async function findAll(query, user_id) {
    const { sortby = "created_at", sortdir = "asc" } = query;
    // const offset = limit * (page - 1);
    const result = await db("activity as a")
        .join("sub_categories as s", "s.sub_category_id", "a.sub_category_id")
        .join("users as u", "u.user_id", "a.user_id")
        .join("category as c", "c.category_id", "s.category_id")
        .select("a.activity_description", "a.activity_amount", "u.user_id", "u.user_username", "c.category_id", "c.category_name", "s.sub_category_id", "s.sub_category_name", "a.activity_id", "a.created_at")
        // .limit(limit)
        .orderBy(sortby, sortdir)
        // .offset(offset)
        .where('a.user_id', Number(user_id.subject[0].user_id))
    return result;
}

async function addActivity(userBody, activity) {
    const { activity_description, activity_amount, sub_category_id } = activity;
    const user_id = userBody.subject[0].user_id;
    await db("activity").insert({ sub_category_id, user_id, activity_amount, activity_description });
    return activity;
}

async function updateActivity(userBody, activity) {
    const { activity_description, activity_amount, sub_category_id, activity_id } = activity;
    const user_id = userBody.subject[0].user_id;
    await db("activity").update({ sub_category_id, user_id, activity_amount, activity_description })
        .where("activity_id", activity_id);
    return await db("activity").where("activity_id", activity_id);
}

async function remove(id) {
    await db("activity").del().where("activity_id", id);
}

async function findCategoryFrequency(id,query) {
    const {filter = null} = query;
    if (!filter) {
        const result = await db("sub_categories as s")
        .select("s.sub_category_name")
        .count("s.sub_category_id as count")
        .sum("a.activity_amount as total")
        .leftJoin("activity as a","a.sub_category_id","s.sub_category_id")
        .leftJoin("category as c","c.category_id","s.category_id")
        .where("c.category_name","expenses")
        .where("a.user_id", id)
        .groupBy("s.sub_category_name")
        return result;
    } else {
        const result = await db("sub_categories as s")
        .leftJoin("activity as a","a.sub_category_id","s.sub_category_id")
        .leftJoin("category as c","c.category_id","s.category_id")
        .where("c.category_name","expenses")
        .where("a.user_id", id)
        .where("s.sub_category_name",filter)
        return result;
    }
    /*
    raw sql : 
    select s.sub_category_name, count(a.sub_category_id) as count from public.sub_categories as s
    left join public.activity as a on a.sub_category_id = s.sub_category_id group by (s.sub_category_name);
    */
}

async function readOnlyCategories() {
    return await db("sub_categories");
}
module.exports = {
    findAll,
    addActivity,
    updateActivity,
    remove,
    findCategoryFrequency,
    readOnlyCategories,
}