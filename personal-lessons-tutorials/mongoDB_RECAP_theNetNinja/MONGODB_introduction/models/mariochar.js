const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// require the mongoose property Schema to create a Schema

// CREATE SCHEMA AND MODEL

const MarioCharSchema = new Schema({
  // the new Schema makes reference to this: mongoose.Schema;

  name: String,
  wight: Number,
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
