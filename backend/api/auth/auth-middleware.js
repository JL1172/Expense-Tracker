const db = require("../../database/db-config");
const yup = require("yup");
const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../../secrets/index");

const schema = yup.object().shape({
    user_username : yup.string().required("username is required").min(5,"username must be longer than 5 characters"),
    user_password : yup.string().required("password is required").min(8, "password must be longer than 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain a special character, number, capital letter, and lowercase letter"),
    user_info_income : yup.string().required("income required").matches(/^[0-9]*$/),
    user_assets : yup.string().required("assets required").matches(/^[0-9]*$/)
});

async function validateUsernameExists(req,res,next) {
    try {
        const {user_username,user_password} = req.body;
        if (!user_password || !user_username) {
            next({status : 422, message : "username and password required"});
        } else {
            const userIsValid = await db("users").where("user_username", user_username).first();
            if (!userIsValid) {
                next({status : 401, message : "invalid username or password"});
            } else {
                req.user = userIsValid;
                next();
            }
        }
    } catch (err) {next(err)}
}

async function validateUsernameUnique(req,res,next) {
    try {
        const {user_username,user_password} = req.body; //eslint-disable-line
        const result = await db("users").where('user_username',user_username).first();
        if (result) {
            next({status : 422, message : "username already exists"});
        } else {
            next();
        }
    } catch (err) {next(err)}
}

async function validatePasswordSchema(req,res,next) {
    try {
        const isValid = schema.validateSync(req.body, {abortEarly : false, stripUnknown : true}); //eslint-disable-line
        next(); 
    } catch (err) {next({status : 422, message : {error : err.errors}})}
}

async function restrict(req,res,next) {
    try {
        const {authorization} = req.headers;
        if (!authorization) {
            next({status : 403, message : "need to be signed in to see this"});
        } 
        if (authorization) {
            jwt.verify(authorization,jwt_secret,(err,decodedToken) => {
                if (err) {
                    next({status : 403, message : "invalid token"});
                } else {
                    req.decodedJwt = decodedToken;
                    next();
                }
            }) 
        }
    } catch (err) {next(err)}
}

async function tokenBuilder(userInformation) {
    const {user_username} = userInformation;
    const user_id = await db("users as u").select("u.user_id").where("user_username",user_username);
    const payload = {
        subject : user_id,
        username : user_username,
    }
    const options = {
        expiresIn : "1d"
    } 
    return jwt.sign(payload,jwt_secret,options)
}

module.exports = {
    restrict,
    validateUsernameExists,
    validateUsernameUnique,
    validatePasswordSchema,
    tokenBuilder
}