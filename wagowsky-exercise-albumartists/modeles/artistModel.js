const mongoose = require("mongoose");

//
//
// 1 MODEL OR SCHEMA
// const ArtistSchema = mongoose.model this does the same thing as the line below
const ArtistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearFounded: {
    type: String,
    required: true,
  },
});

//2 CREATE THE MODULE
const Artist = mongoose.model("artists", ArtistSchema);
module;
