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

*/

app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);

/* 

Defining the Port the APP is going 
to Listen to

*/
