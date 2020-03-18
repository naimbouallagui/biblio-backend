const express = require("express");
const bodyParser = require("body-parser");
require("./Database/db");
const app = express();
const bookApis = require("./Apis/bookApis");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/books", bookApis);
// listen to port 8080
app.listen(8080);
