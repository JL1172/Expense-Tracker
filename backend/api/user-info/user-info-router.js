const router = require("express").Router();
const UserData = require("./user-info-model");
const {restrict} = require("../auth/auth-middleware");

router.get("/account_info",async(req,res,next) => {
    
})

module.exports = router;