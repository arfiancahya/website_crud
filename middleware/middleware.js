require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");

const secret = process.env.JWT_SECRET = "secret";

module.exports = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(404).send({
            status: 404,
            message: "Tidak ada Token"
        });
    }

    const decode = jsonwebtoken.verify(token, secret);
    req.id = decode.id
    next()
};