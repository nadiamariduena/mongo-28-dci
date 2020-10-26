const mongoose = require("mongoose");
const User = require("../models/User");
const Record = require("../models/Record");
const Order = require("../models/Order");
const faker = require("faker");

console.log(`You are running the seed script.`);
console.log(`All your previous data will be purged.`);

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

//                            **   CONNECT TO DataBase  **
//                    IIFE function to do work with the async await
//
//
//

mongoose.connect("mongodb://localhost/record-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log(`You are connected to the DB. Seed will start now...`);
});
//
//                        ----------------
//
//
//
//
(async function () {
  //now that we are using an async function, the wait here will not complain:
  //     await User.deleteMany({});
  //

  //
  //
  //
  //  ----------- We purge all the users -----------
  //
  try {
    // if you want to await stuff you have to be inside an async function
    await User.deleteMany({});
    console.log(`All users have been deleted...`);

    await Record.deleteMany({});
    console.log(`All records have been deleted...`);

    await Order.deleteMany({});
    console.log(`All orders have been deleted...`);
  } catch (err) {
    console.log(err);
  }
  //
  //
  //
  //  ----------- We create 20 fake users -----------
  //
  //

  const userPromises = Array(20)
    .fill(null)
    .map(() => {
      const user = new User({
        /*
        
        To know from where the faker.name , internet , addresscomes from go
         to the faker page and check the list:
        https://www.npmjs.com/package/Faker
        
        
        */
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        // this is new, belongs to the lesson of the oders ID (16/10/20)
        address: {
          city: faker.address.city(),
          number: faker.random.number({ min: 0, max: 500 }),
          street: faker.address.streetName(),
        },
      });

      console.log(`We created a user: ${user.firstName} ${user.lastName}`);
      return user.save();
    });

  try {
    await Promise.all(userPromises);
    console.log(`All users are saved`);
  } catch (error) {
    console.log(error);
  }

  //
  //
  //
  //  ***  LESSON OF THE DAY  ***
  //
  //
  //
  // 1  We create 20 fake records
  //
  //
  const recordPromises = Array(20)
    .fill(null)
    .map(() => {
      const record = new Record({
        /*
        
        To know from where the faker.name , comes from go
         to the faker page and check the list:
        https://www.npmjs.com/package/Faker
        
        
        */
        title: faker.random.words(),
        artist: faker.name.lastName(),
        price: faker.random.number({ min: 2, max: 30 }), // returns a random num between 2 to 30
        year: faker.random.number({ min: 1970, max: 1980 }), // returns a random num between between 1970 and 1980
      });

      console.log(`We created the record: ${record.title} by ${record.artist}`);
      return record.save();
    });

  try {
    await Promise.all(recordPromises);
    console.log(`All the records are saved`);
  } catch (error) {
    console.log(error);
  }
  //
  //
  // 2  We create 10 fake orders with existing userIds and recordIds
  //
  //
  //
  /*
  I make an array of  10, 
    const orderPromises = Array(10)

    - I FILL it with nothing:
      .fill(null)
  
  then for each element 
  of the array:

  const user = User.findOne(); //this was before this:    const randomUser = await User....
  const record = Record.findOne(); //this was before this:     const randomRecord = await Record. ...
  
  
  , we create a new order:

       const order = new Order({
        userId: randomUser[0]._id,
        basket: [
          {
            recordId: randomRecord[0]._id,
            quantity: faker.random.number({
              min: 1,
              max: 5,
            }),
          },
        ],
      });

  
  but before we create
   a new user we find a Random User and a random record:

   const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);
      const randomRecord = await Record.aggregate([{ $sample: { size: 1 } }]);
  

***  AGGREGATE?








  */

  const orderPromises = Array(10)
  /*                                          ERROR**
  HE ADDED THE ASYNC function inside the map because it was causing a huge error 
  
  
  */
    .fill(null)
    .map(async () => {
      const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);
      const randomRecord = await Record.aggregate([{ $sample: { size: 1 } }]);
      console.log("--------------------------------------------");
      console.log("HERE IS THE RANDOM USER", randomUser);
      console.log("HERE IS THE RANDOM RECORD", randomRecord);

      const order = new Order({
        userId: randomUser[0]._id,
        basket: [
          {
            recordId: randomRecord[0]._id,
            quantity: faker.random.number({
              min: 1,
              max: 5,
            }),
          },
        ],
      });

      console.log(`We created order ${order}`);
      return order.save();
    });

  try {
    await Promise.all(orderPromises);
    console.log(`All the orders are saved`);
  } catch (error) {
    console.log(error);
  }

  /* 
    
    



*/

  // We close the db connection
  console.log(`We are closing the mongoose connection. Ciaaaaoo!`);

  mongoose.connection.close();
})();
