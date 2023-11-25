const router = require("express").Router();
const {restrict} = require("../auth/auth-middleware");
const {validateActivityPost,validateCategory} = require("./activity-middleware");
const ActivityData = require("./activity-model");

router.get("/",restrict,async(req,res,next) => {
    try {
        const result = await ActivityData.findAll(req.query,req.decodedJwt);
        res.status(200).json(result); 
    } catch (err) {next(err)}
})
router.post("/",restrict,validateActivityPost,validateCategory,async(req,res,next) => {
    try {
        const addedActivity = await ActivityData.addActivity(req.decodedJwt,req.body);
        res.status(201).json({data : addedActivity, message : req.tolerance_notice}); 
    } catch (err) {next(err)}
})
module.exports = router;