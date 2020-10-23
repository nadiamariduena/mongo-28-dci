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
//const Artist = mongoose.model("artists", ArtistSchema);
//module.exports = Artist; //exporting the ARTIST content (line: 19)
//
//
// TO SHORTER THE LINE between line 19 and 20 , you can also do this:
module.exports = Artist = mongoose.model("artists", ArtistSchema);
