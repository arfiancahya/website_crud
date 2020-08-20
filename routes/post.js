const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");

router.get("/", PostController.getAllPost);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);

module.exports = router;