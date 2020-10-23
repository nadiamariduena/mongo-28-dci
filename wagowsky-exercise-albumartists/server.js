const express = require("express");

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

/* 

Defining the Port the APP is going 
to Listen to

*/
app.listen(5000, console.log("server running on PORT 5000"));
