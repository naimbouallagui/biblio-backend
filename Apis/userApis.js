const express = require("express");
const router = express.Router();
const UserModel = require("../Models/userSchema").UserModel;

/**
 *  addUser
 */
router.post("/addUer", (req, res) => {
  const newUser = new UserModel(req.body);
  newUser.save((err, result) => {
    if (err) res.sendStatus(500);
    else res.status(200).send(result);
  });
});

module.exports = router;
