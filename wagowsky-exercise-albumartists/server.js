const express = require("express");
const mongoose = require("mongoose");
//
//

// importing Routes
const albumRoutes = require("./routes/albumRoutes");
//
const artistRoutes = require("./routes/artistRoutes");

// initializing EXPRESS
const app = express();

/* 

DEFINING ROUTES AND CONNECTING THEM to the 
Relevant Route FILES

app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);

the 2 lines above are connected to the controllers
to this:

   const albums = await Album.find({}); //Album.find({}); it will return all the data inside the "album"
    res.status(200);
    res.send(albums);

*/

app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);

// Define COnnection to the DB
const connectDB = async () => {
  //
  //
  // This is the connection string connected to the collections in the compass
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://wagowsky:12345@trial.utxhq.mongodb.net/trial?retryWrites=true&w=majority",
      // The question mark here: ?retry ,  THE QUESTION mark means that the QUERY starts here , like in the regex,
      // the following is to be used in case of warnings (deprecation etc)
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
/* 

Defining the Port the APP is going 
to Listen to

*/
app.listen(5000, console.log("server running on PORT 5000"));

