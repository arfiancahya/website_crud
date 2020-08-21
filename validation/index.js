const {
    check,
    validationResult
} = require("express-validator");

const runValidation = (
    req,
    res,
    next
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).send({
            status: false,
            message: errors.array()[0].msg
        });
    }
    next()
};

const validationDaftar = [
    check("username", "Username tidak boleh kosong").notEmpty(),
    check("email", "Email tak boleh koskng").notEmpty().matches(/.+\@.+\..+/).withMessage("email harus menggunakan @"),
    check("password", "Password harus diisi").notEmpty().isLength({
        min: 6
    }).withMessage("Password harus 6 character")
]

const validationLogin = [
    check("username", "Username tidak boleh kosong").notEmpty(),
    check("password", "password tidak boleh kosong").notEmpty()
]

module.exports = {
    runValidation,
    validationDaftar,
    validationLogin
}