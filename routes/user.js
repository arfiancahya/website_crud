const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const validasi = require("../validation");
const middleware = require("../middleware/middleware");

router.post("/daftar", validasi.validationDaftar, validasi.runValidation, UserController.daftarUser);
router.post("/login", validasi.validationLogin, validasi.runValidation, UserController.loginUser);
router.get("/user", middleware, UserController.getSingleUser);
router.put("/forger", UserController.forgetPassword);

module.exports = router;