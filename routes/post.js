const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");

router.get("/", PostController.getAllPost);
router.post("/", PostController.createPost);

module.exports = router;