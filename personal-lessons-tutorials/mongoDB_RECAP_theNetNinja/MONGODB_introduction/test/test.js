const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving records", function () {
  // CREATE TESTS
  it("Saves a record to the databse", function (done) {
    // here below you create a "new" INSTANCE of the MarioChar model (inside the models folder)
    var char = new MarioChar({
      name: "Mario",
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
  // next test
});
