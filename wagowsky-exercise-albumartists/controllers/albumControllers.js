// IMPORTING the RESPECTIVE MODEL
//
//
const Album = require("../models/albumModel");

//  Defining and exporting a specific Controller Method
//  Get All Albums(entries) data stuff artist, yearReleased...  from the albums Collection
// Using Async-Await and Try-catch
//
/* 
    FILL in the controllers so they fetch all of the artists and albums 
    (using ASYNC-AWAIT try and catch)
*/
//

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

exports.getAlbums = asyncHandler(async (req, res, next) => {
  /*
                    const albums = await Album.find({});  line: 25

    //it will return all the data inside the "album" which is
     the schema stuff, and then transform it into the variable "albums", that
      will accepted only if everything was fine with the request.



     */
  // HERE YOU HAVE TO SET UP THE TRY AND CATCH for the data of the albums
  //

  try {
    const albums = await Album.find({}); //Album.find({}); it will return all the data inside the "album"
    res.status(200);
    res.send(albums);
  } catch (error) {
    res.status(400); //show an error if the info was negative
    res.send(error.message);
  }
});

/*
exports.getAlbums;

connected to the server.js
app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);



*/
