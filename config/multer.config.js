const multer = require('multer');
const path  = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: './client/public/uploads',
    filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000}
});

module.exports = upload;