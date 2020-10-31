const mongoose = require("mongoose");

// Connect to mongodb

mongoose.connect("mongodb://localhost/testaroo");
//
//
// 1 event listener
// the once in the line below means: just listen to this event ONCE
// the open means: that once the connection is open, then you find this function
mongoose.connection
  .once("open", function () {
    console.log("Connection has been made... made some BUZZ");
  })
  .on("error", function (error) {
    console.log("Connection error", error);
  });

/*



  */
