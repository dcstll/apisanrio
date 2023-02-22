const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
  name: String,
  img: String,
  debut_year: Number,
  creator: String,
  universe: String,
  residence: String,
  appearance: String,
  gender: String,
  specie: String,
  birthday: String
});

module.exports = mongoose.model("characters", charactersSchema);
