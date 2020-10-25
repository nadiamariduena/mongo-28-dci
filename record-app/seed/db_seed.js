const mongoose = require("mongoose");
const User = require("../models/User");

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
  // we close the db connection
})();
//
// --------------------------
