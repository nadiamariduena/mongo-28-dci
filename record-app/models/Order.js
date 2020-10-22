//
// SCHEMA

const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema(
  {
    //   mongoose.ObjectId  is going to generate an Id and like so
    // we will be able to reach the id and what it contains
    userId: {
      type: mongoose.ObjectId,
      required: true,
    },
    basket: [
      {
        recordId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrdersSchema);
//
//

/*








The basket can contain multiple ORDERS which means multiple 
objects and those objects they are RECORDS.

[{records}, {records}]

NOW how can you distinguish those records?
You can distinguish them all from the ID's like so

You can have a list of record ID's
[recordId, recordId]

or maybe if its not enough , you can also have 
recordId and quantity
[
  { recordId, quantity },
  { recordId, quantity },
];

--- REMEMBER TO CONVERT the basket in an array as 
this is an array of STUFF

[
  { recordId, quantity },
  { recordId, quantity },
];

when converted:
   basket: [
      {
        recordId: {
          type: String,
          required: true,
        },
      },
    ],
*/
