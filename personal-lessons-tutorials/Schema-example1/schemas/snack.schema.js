// import the modlues library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//
//bluebird
mongoose.Promise = require("bluebird");

//
const SnackSchema = new Schema(
  {
    snack: String,
    store: Boolean, //true false
    requiresPrep: Boolean,
    savory: Boolean,
    sweet: Boolean,
  },
  {
    timestamps: true,
  }
);

// NOW WE NEED TO PASS THE SCHEMA ABOVE into  MODEL that we will use to perform OPRATIONs

const SnackModel = mongoose.model("Snack", SnackSchema);
// Snack is the actual name for the collections

// will trow and error: export default SnackModel;
module.exports = SnackModel;

/*

Bluebird is a fully-featured Promise library for JavaScript. 
The strongest feature of Bluebird is that it allows you to "promisify" 
other Node modules in order to use them asynchronously. Promisify is a 
concept applied to callback functions.Sep 8, 2020

Built-in Promises

Mongoose async operations, like .save() and queries, return thenables. 
This means that you can do things like MyModel.findOne({}).then() and await 
MyModel.findOne({}).exec() if you're using async/await.

Queries are not promises

Mongoose queries are not promises. They have a .then() function for co and 
async/await as a convenience. If you need a fully-fledged promise, use the
 .exec() function.

Queries are thenable

Although queries are not promises, queries are thenables. That means they 
have a .then() function, so you can use queries as promises with either promise chaining or async await



https://mongoosejs.com/docs/promises.html
*/
