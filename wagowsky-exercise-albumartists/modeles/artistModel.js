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
module.exports = Artist; //exporting the ARTIST content (line: 19)

/*
ANSWERING Natia's question about WHY we cannot
add 2 collections in the same file.

HE EXPLAINED that it would clash at a certain point because 
in this line where you export the MODULE:

                      const Artist = mongoose.model("artists", ArtistSchema);
you only have the 
possibility to add ONE COLLECTION, so thats why!!





*/
