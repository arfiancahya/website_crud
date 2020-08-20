const express = require("express");
const router = express.Router();
const post = require("./post");

router.use("/post", post);

module.exports = router;