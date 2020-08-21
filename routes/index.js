const express = require("express");
const router = express.Router();
const post = require("./post");
const user = require("./user");

router.use("/post", post);
router.use("/auth", user);

module.exports = router;