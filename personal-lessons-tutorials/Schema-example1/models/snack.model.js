const SnackModel = require("../schemas/snack.schema");
// go to the snack.schema.js and include the bluebird

SnackModel.Insert = function () {
  const newSnack = new SnackModel({
    name: "popcorn",
    store: true,
    savory: true,
    sweet: false,
    requirePrep: true,
  });

  newSnack
    .save()
    .then((result) => {
      console.log("it was successful");
    })
    .catch((error) => {
      console.log("something went wrong");
    });
};

// export default SnackModel;
// will trow and error: export default SnackModel;
module.exports = SnackModel;
