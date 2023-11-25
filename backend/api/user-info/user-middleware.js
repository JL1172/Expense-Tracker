const db = require("../../database/db-config");
const yup = require("yup");

const schema = yup.object().shape({
    newPassword : yup.string().required("New password is required").min(8, "password must be longer than 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain a special character, number, capital letter, and lowercase letter"),
    oldPassword : yup.string().required("Must enter old password to change password")
})

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
async function validateNewPassword(req,res,next) {
    try {
        const isValid = schema.validateSync(req.body, {abortEarly : false, stripUnknown : true}); //eslint-disable-line
        next();
    } catch (err) {next({message : {error : err.errors}})}
}
async function validateUsernameExistsModified(req,res,next) {
    try {
        const {user_id} = req.decodedJwt.subject[0];
        const isValid = await db("users").where({user_id : user_id}).first();
        if (!isValid) next({status : 400, message : "invalid username or password"});
        req.info = isValid;
        next();
    } catch (err) {next(err)}
}
module.exports = {
    validateUpdateBody,
    validateNewPassword,
    validateUsernameExistsModified
}