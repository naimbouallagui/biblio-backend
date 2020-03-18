const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World!')
  })
// listen to port 8080
app.listen(8080, () => {
  console.log("listening to port successfuly");
});
