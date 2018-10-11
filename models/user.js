
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  foods:Array,
  exercises:Array,
  users:Array,

});

const User = mongoose.model("User", userSchema);
  
module.exports = User; 