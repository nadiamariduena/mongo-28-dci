// IMPORTING the RESPECTIVE MODEL
//
//
const Artist = require("../models/artistModel");

//  Defining and exporting a specific Controller Method
//  Get All Artists(entries) data stuff artist, yearReleased...  from the albums Collection
// Using Async-Await and Try-catch

exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find({}); //Album.find({}); it will return all the data inside the "album"
    res.status(200);
    res.send(artists);
  } catch (error) {
    res.status(400); //show an error if the info was negative
    res.send(error.message);
  }
};
