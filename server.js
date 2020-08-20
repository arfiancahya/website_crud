const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT_APP || 5001;
app.listen(port, () => {
    console.log(`Server using on port ${port}`);
});