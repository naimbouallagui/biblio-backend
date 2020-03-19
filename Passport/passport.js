const BearerStrategy = require("passport-http-bearer");
const passport = require("passport");
var jwt = require("jsonwebtoken");
const UserModel = require("../Models/userSchema").UserModel;
const config = require("../Config/config");

passport.use(
  new BearerStrategy(function(token, done) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) throw err;
      UserModel.findById({ _id: decoded.data._id }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, true);
      });
    });
  })
);
