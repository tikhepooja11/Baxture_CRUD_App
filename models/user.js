const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var userSchema = new Schema({
  //  _id field will be added automatically by mongodb db.
  username: { type: String, required: true },
  age: { type: Number, required: true },
  hobbies: { type: [String], required: true },
});

module.exports = mongoose.model("User", userSchema, "users");
