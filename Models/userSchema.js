const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true }
});

module.exports = { UserModel: mongoose.model("user", userSchema) };
