const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
require("dotenv").config();

app.use("/api/", routes);
const port = process.env.PORT_APP || 5001;
app.listen(port, () => {
    console.log(`Server using on port ${port}`);
});