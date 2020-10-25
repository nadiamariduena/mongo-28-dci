const mongoose = require("mongoose");
const User = require("../models/User");
// FAKER
const faker = require("faker");

console.log("you are running the seed script");
console.log("all your previous data will be purged");

//
// --------------------------
//
// We connect to the database

// const express = require("express");
//  we dont need express because we are not going to start the server
//
// const cors = require("cors"); the same for cors, we are not going to the server
// const app = express();
// const port = 5000;

//                               CONNECT TO DataBase
// IIFE function to do work with the async await

(async function () {
  //now that we are using an async function, the wait here will not complain:
  //     await User.deleteMany({});
  //
  mongoose.connect("mongodb://localhost/fbw28-record-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", () => {
    console.log(`You are connected to the DB. Seed will start now`);
  });

  //
  // --------------------------
  //
  //  we purge all the users

  try {
    // if you want to await stuff you have to be inside an async function
    //   to do it , you have to use an IIFE (Self-invoking functions in js)
    await User.deleteMany({});
    console.log(`All users have been deleted...`);
  } catch (err) {
    console.log(err);
  }

  //
  // we create 20 fake users

  const userPromises = Array(20)
    .fill(null)
    .map(() => {
      const user = new User({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      });

      console.log(`We created a user with name ${user.firstName}`);

      return user.save();
    });

  try {
    await Promise.all(userPromises);
    console.log(`All users are saved`);
  } catch (error) {
    console.log(error);
  }

  /* And then at the end after we are done with the 20 promises
 above, we would like to close the connection.

 So if we want to close the mongoose connection what we have to do?


*/

  console.log("we are closing the mongoose connection...bye");

  // Since we named mongoose.connect("mongodb: in the beginning you can end up with the same  mongoose.connection.close();
})();

//

// --------------------------
// we close the db connection

/*












Explanation:

we create a User using the class User,
the User that we have in the model

I make an array of 20:
\*\*\* const userPromises = Array(20)
i FILL it with nothing:
.fill(null) and then i map it: .map(() => {
through each element.

SO As we map through the array:
.map(() => {
We create a USER for each element:
firstName: faker.name.firstName(),
lastName: faker.name.lastName(),
password: faker.internet.password(),
email: faker.internet.email(),

AND THEN we want to save this user and keep the promise
of "saved INSIDE" the array

return user.save(); // this is a promise and is returning everytime a new user for 20 times

so after the whole array with the User content, we have
an array with 20 promises
*/
