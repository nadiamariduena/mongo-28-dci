const mocha = require("mocha");
const assert = require("assert");

describe("some demo tests", function () {
  // CREATE TESTS
  it("adds two numbers together", function () {
    assert(2 + 3 === 5);
    //   you want to assert that  2+3 is equal to 5
    // so if 2+3 is true so 5, this assert passes , if the 2+3 was === to 4 it wont pass
  });
});
