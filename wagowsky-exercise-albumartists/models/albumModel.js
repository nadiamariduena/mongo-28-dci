const mongoose = require("mongoose");

//
//
// 1 MODEL OR SCHEMA
// const ArtistSchema = mongoose.model this does the same thing as the line below
const AlbumSchema = mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  yearReleased: {
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
module.exports = Album = mongoose.model("albums", AlbumSchema);
// albums is the name of the collection in the folder in the database, compass for example helps you to see what you have.

/*








ANSWERING Natia's question about WHY we cannot
add 2 collections in the same file.

HE EXPLAINED that it would clash at a certain point because 
in this line where you export the MODULE:

                      const Artist = mongoose.model("artists", ArtistSchema);
you only have the 
possibility to add ONE COLLECTION, so thats why!!

Its actually because you wouldn't be able to differentiate between the 2 MODULES.


*** NOW COPY THIS SCHEMA AND PASTE it inside the albumsModel.js
change some data


*/
