const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const validasi = require("../validation");

router.post("/daftar", validasi.validationDaftar, validasi.runValidation, UserController.daftarUser);
router.post("/login", UserController.loginUser);

module.exports = router;