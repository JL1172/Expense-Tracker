const router = require("express").Router();
const bcrypt = require("bcryptjs");
const UserData = require("./auth-model");
const { validateUsernameUnique, validatePasswordSchema, validateUsernameExists, tokenBuilder } = require("./auth-middleware");

router.post("/register", validatePasswordSchema, validateUsernameUnique, async (req, res, next) => {
    try {
        const { user_username, user_password } = req.body;
        const hashed = bcrypt.hashSync(user_password, 10);
        const userToInsert = { user_username: user_username, user_password: hashed };
        await UserData.add(userToInsert);
        res.status(201).json({ message: `Hello ${user_username}, nice to meet you` });
    } catch (err) { next(err) }
})


router.post("/login", validateUsernameExists, async (req, res, next) => {
    try {
        const { user_username, user_password } = req.body;
        if (bcrypt.compareSync(user_password, req.user.user_password)) {
            const token = await tokenBuilder(req.user);
            res.status(200).json({message : `Welcome back ${user_username}`, token : token});
        } else {
            next({status : 404, message : "invalid username or password"}); 
        }
    } catch (err) { next(err) }
})

module.exports = router;