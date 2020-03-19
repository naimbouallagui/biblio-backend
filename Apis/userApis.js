const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userSchema").UserModel;
const config = require("../Config/config");
const jwt = require("jsonwebtoken");
const passport = require("passport");

/**
 *  addUser
 */
router.post(
  "/addUer",
  passport.authenticate("bearer", { session: false }),
  (req, res) => {
    const newUser = new UserModel(req.body);
    newUser.save((err, result) => {
      if (err) res.status(400).send(err.message);
      else res.status(200).send(result);
    });
  }
);

router.post("/login", function(req, res) {
  var body = req.body;
  UserModel.findOne(
    { username: body.username, password: body.password },
    (err, userFound) => {
      if (err) res.send(err);
      if (!userFound) res.status(400).send("bad request");
      var token = jwt.sign({ data: userFound }, config.secret, {
        expiresIn: "24h"
      });
      res.send({ access_token: token });
    }
  );
});
module.exports = router;
