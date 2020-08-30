const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");

router.get("/", PostController.getAllPost);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.delete("/", PostController.deleteAllPost);
router.get("/order", PostController.orderPost);

module.exports = router;