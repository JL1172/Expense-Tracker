const yup = require("yup");
const db = require("../../database/db-config");

const schema = yup.object().shape({
    activity_description: yup.string().required("description is required").matches(/^[A-Za-z ]*$/, "only letters allowed"),
    category_id: yup.string().required("category id is required").matches(/^[0-9]*$/, "must only be numerical value"),
    category_name: yup.string().required("category name is required"),
    sub_category_id: yup.string().required("sub category id is required").matches(/^[0-9]*$/, "must only be numerical value"),
    sub_category_name: yup.string().required("sub category name required"),
    tolerance_accepted: yup.boolean().default(false),
})
const schema2 = yup.object().shape({
    activity_description: yup.string().required("description is required").matches(/^[A-Za-z ]*$/, "only letters allowed"),
    activity_id: yup.string().required("activity id is required").matches(/^[0-9]*$/, "must only be numerical value"),
    category_id: yup.string().required("category id is required").matches(/^[0-9]*$/, "must only be numerical value"),
    category_name: yup.string().required("category name is required"),
    sub_category_id: yup.string().required("sub category id is required").matches(/^[0-9]*$/, "must only be numerical value"),
    sub_category_name: yup.string().required("sub category name required"),
    tolerance_accepted: yup.boolean().default(false),
})


async function validateActivityPost(req, res, next) {
    try {
        const isValid = schema.validateSync(req.body, { abortEarly: false, stripUnknown: true }); //eslint-disable-line
        if (!req.body.activity_amount) next({ status: 422, message: "activity amount required" });
        if (isNaN(req.body.activity_amount)) next({ status: 422, message: "amount must be number" });
        next();
    } catch (err) { next({ status: 422, message: { error: err.errors } }) }
}
async function validateActivityPut(req, res, next) {
    try {
        const isValid = schema2.validateSync(req.body, { abortEarly: false, stripUnknown: true }); //eslint-disable-line
        if (!req.body.activity_amount) next({ status: 422, message: "activity amount required" });
        if (isNaN(req.body.activity_amount)) next({ status: 422, message: "amount must be number" });
        next();
    } catch (err) { next({ status: 422, message: { error: err.errors } }) }
}
async function validateDelete(req, res, next) {
    try {
        const { id } = req.params;
        const activity_id = id;
        if (!activity_id) next({ status: 400, message: "activity id needed" });
        else {
            if (isNaN(activity_id)) next({ status: 400, message: "not a valid id" });
            const isValidId = await db("activity").where("activity_id", activity_id).first();
            if (!isValidId) next({ status: 400, message: "not a valid id" });
            else {
                next();
            }
        }
    } catch (err) { next(err) }
}
async function validateCategory(req, res, next) {
    try {
        const isValidCat = await db("category").where("category_id", req.body.category_id).first();
        const isValidSub = await db("sub_categories").where("sub_category_id", req.body.sub_category_id).first();
        if (!isValidCat || !isValidSub) {
            next({ status: 422, message: "Category and sub category must exist to be used. To create a sub category, click add sub category" })
        } else {
            const { denominator } = await db("activity")
                .count("activity_id as denominator")
                .where("sub_category_id", req.body.sub_category_id).first();
            const { numerator } = await db("activity")
                .sum("activity_amount as numerator")
                .where("sub_category_id", req.body.sub_category_id).first();
            const average = Number(numerator) / Number(denominator);
            if (average >= 500 && !req.body.tolerance_accepted) {
                const tolerance = average + 1000;
                const subtractTolerance = average - 1000;
                if (req.body.activity_amount > tolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is higher than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
                if (req.body.activity_amount <= subtractTolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is lower than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
            }
            if (average < 500 && average >= 100 && !req.body.tolerance_accepted) {
                const tolerance = average + 200;
                const subtractTolerance = average - 200;
                if (req.body.activity_amount > tolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is higher than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
                if (req.body.activity_amount <= subtractTolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is lower than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
            }
            if (average < 100 && !req.body.tolerance_accepted) {
                const tolerance = average + 50;
                const subtractTolerance = average - 50;
                if (req.body.activity_amount > tolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is higher than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
                if (req.body.activity_amount <= subtractTolerance) {
                    req.tolerance_notice = { tolerance: tolerance, message: "Verify monetary amount: this is lower than average for this category" };
                    next({ status: 400, message: req.tolerance_notice });
                }
            }
            next();
        }
    } catch (err) { next(err) }
}

async function queryValidation(req, res, next) {
    try {
        // console.log(req.query)
        if (Object.keys(req.query).length > 0) {
            if (!req.query.filter) next({ status: 400, message: "Ensure correct parameters" })
            const result = await db("sub_categories").where("sub_category_name", req.query.filter);
            // console.log(result)
            if (!result.length) {
                next({ status: 400, message: "Category not found" });
            } else {
                next();
            }
        } else next();
    } catch (err) { next(err) }
}

module.exports = {
    validateActivityPost,
    validateDelete,
    validateCategory,
    validateActivityPut,
    queryValidation
}