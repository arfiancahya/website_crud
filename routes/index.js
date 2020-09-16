const express = require("express");
const router = express.Router();
const post = require("./post");
const user = require("./user");
const file = require('./file');


router.use("/post", post);
router.use("/auth", user);
router.use('/file', file);

module.exports = router;