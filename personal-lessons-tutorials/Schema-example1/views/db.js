var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose
  .connect("mongodb://localhost:27017/snacktime")
  .then(() => {
    console.log("heyaaa success");
  })
  .catch(() => {
    console.log("erorrrrrr");
  });
