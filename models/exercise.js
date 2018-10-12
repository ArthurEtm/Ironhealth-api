const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const exerciseSchema = new Schema({
  
reps: Number,
sets: Number,
type:String,
description:String,
 weight: Number,
 details:String,
 goodfor:String,
 badfor:String,
 workouttime:String,
 Creator:String,
 image:String,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;