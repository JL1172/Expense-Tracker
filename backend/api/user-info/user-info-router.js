const router = require("express").Router();
const UserData = require("./user-info-model"); //eslint-disable-line
const {restrict} = require("../auth/auth-middleware");
const {validateUpdateBody} = require("./user-middleware");

router.get("/", restrict,async(req,res,next) => {
    try {
        const {user_id} = req.decodedJwt.subject[0];
        const result = await UserData.findUserInfo(user_id); 
        res.status(200).json(result);
    } catch (err) {next(err)}
})
router.put("/financial",restrict,validateUpdateBody,async(req,res,next) => {
    try {
        const {user_id} = req.decodedJwt.subject[0];
        const map = {};
        for (let key in req.body) {
            if (!(key in map)) map[key] = Number(req.body[key]);  
        }
        const copy = {...map, user_id}; 
        const result = await UserData.updateUserInfo(copy)
        res.status(201).json(result)
    } catch (err) {next(err)}
})
router.put("/credentials",restrict,async(req,res,next) => {
    try {
        //finished middleware and function 
    } catch (err) {next(err)}
})
module.exports = router;