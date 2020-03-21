const express = require("express");
const bodyParser = require("body-parser");
require("./Database/db");
require("./Passport/passport");
require("dotenv").config();
const app = express();
const bookApis = require("./Apis/bookApis");
const userApis = require("./Apis/userApis");
const cors = require("cors");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/books", bookApis);
app.use("/api/user", userApis);
// listen to port 8080
app.listen(process.env.PORT || 3000);
