const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const foodSchema = new Schema({


  description:String,
  creator:String,
  fat: String,
  carbs: String,
  protein:String,
  calories:String,
  vegan:Boolean,
  description:String,
  cookOptions:String,
  healthy:Boolean,
  image:String,
  

});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food; 