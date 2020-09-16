const express = require("express");
const router = express.Router();
const fileWorker = require('../controller/FileController');
const upload = require('../config/multer.config');




router.post('/upload', upload.single('uploadfile'), fileWorker.uploadFile); 
router.get('/list', fileWorker.getFile);

module.exports = router;