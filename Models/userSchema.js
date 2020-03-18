const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String
});

module.exports = { UserModel: mongoose.model("user", userSchema) };
