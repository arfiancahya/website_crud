const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
require("dotenv").config();

//databasenya dan untuk memanggil file route, controller, dan models
app.use("/api/", routes);

//body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const port = process.env.PORT_APP || 5001;
app.listen(port, () => {
    console.log(`Server using on port ${port}`);
});