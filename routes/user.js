const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.post("/daftar", UserController.daftarUser);

module.exports = router;