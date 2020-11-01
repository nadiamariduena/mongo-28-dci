const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

//  CONNECT to the database before TEST run
before(function (done) {
  // Connect to mongodb

  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  //
  //
  // 1 event listener
  // the once in the line below means: just listen to this event ONCE
  // the open means: that once the connection is open, then you find this function
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made... made some BUZZ");
      done();
    })
    .on("error", function (error) {
      console.log("Connection error", error);
    });
  //
});

/*



  */
