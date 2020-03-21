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
  "/addUser",
  passport.authenticate("bearer", { session: false }),
  (req, res) => {
    const newUser = new UserModel(req.body);
    newUser.save((err, result) => {
      if (err) res.status(400).send(err.message);
      else res.status(200).send(result);
    });
  }
);

/**
 *  loginUser
 */
router.post("/login", (req, res) =>{
  var body = req.body;
  UserModel.findOne(
    { username: body.username, password: body.password },
    (err, userFound) => {
      if (err) res.send(err);
      else if (!userFound) res.status(400).send("bad request");
      else {
        var token = jwt.sign({ data: userFound }, config.secret, {
          expiresIn: "24h"
        });
        res.send({ access_token: token });
      }
    }
  );
});

/**
 *  getAllUsers
 */

router.get("/getAllUsers",(req, res) => {
    UserModel.find((err, result) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(result);
    })
});

/**
 *  getUserById
 */
router.get("/getUser/:id", passport.authenticate("bearer", { session: false }),(req, res) => {
  UserModel.findById(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(result);
  });
});

module.exports = router;
