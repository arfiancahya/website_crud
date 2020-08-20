const express = require("express");
const router = express.Router();
const useController = require("../controller/PostController");
const PostController = require("../controller/PostController");

router.get("/", PostController.getAllPost);

module.exports = router;