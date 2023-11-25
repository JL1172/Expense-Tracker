const router = require("express").Router();
const {restrict} = require("../auth/auth-middleware");
const ActivityData = require("./activity-model");

router.get("/",restrict,async(req,res,next) => {
    try {
        const result = await ActivityData.findAll(req.query,req.decodedJwt);
        res.status(200).json(result); 
    } catch (err) {next(err)}
})
router.post("/",async(req,res,next) => {
    try {
        console.log("hello")
    } catch (err) {next(err)}
})
module.exports = router;