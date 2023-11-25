// const db = require("../../database/db-config");

async function validateUpdateBody(req, res, next) {
    try {
        const { user_info_income, user_assets } = req.body;
        if (!user_assets || !user_info_income) {
            next({ status: 400, message: "income and assets required" })
        } else {
            if (Object.keys(req.body).length !== 2) {
                next({ status: 422, message: "only income and assets allows" })
            } else {
                if (isNaN(user_assets) || isNaN(user_info_income)) {
                    next({ status: 422, message: "income and assets must be monetary amount" });
                } else if (!(isNaN(user_assets)) && !(isNaN(user_info_income))) {
                    next();
                }
            }
        }
    } catch (err) { next(err) }
}

module.exports = {
    validateUpdateBody
}