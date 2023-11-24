const jwt_secret = process.env.JWT_SECRET || "this is a sec?ret";
const bcrypt_rounds = process.env.BCRYPT_ROUNDS || 12;

module.exports = {
    jwt_secret,bcrypt_rounds
}