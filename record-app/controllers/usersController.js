/** CONNECT TO LOWDB */
const db = require("../lib/db-setup");
const User = require("../models/User");
//
//
//
//
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
};
//
//
//
//
exports.getUser = async (req, res, next) => {
  try {
    // const user = await User.find({_id: req.params});
    const user = await User.findById(req.params.id);
    if (!user) throw new Error(`No user with id: ${req.params.id}`);
    res.send(user);
  } catch (error) {
    next(error);
  }
};
//
//
//
//
exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const data = await user.save();

    res.send(data);
  } catch (error) {
    next(error);
  }
};
/*
The req.body is the data the user is passing, like so:
POSTMAN, on POST method
{
"firstName": "Steve",
 "lastName": "Seasgull",
 "password": "12356",
 "firstName": "russian@gmail.com",

}

So this line const user = new User(req.body); 
means:   

Its sayd YOU KNOW WHAT create a new User: 
new User( 
  "based" on
the User model User.js , and pass inside those guys (req.body);
so the data the user is giving: 
 {
"firstName": "Steve",

etc ...


So you can create MULTIPLE users
because this new User(
  are all the models you make, check the model folder
  and go to the User.js then contrast it with the result in Postman
  , you cannot add there info if you dont have anything in the User.js
  as that file is the skeleton you will use to give data,
   i will add an image in the read me.


*/
//
//
//
//
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) throw new Error(`No user with id: ${req.params.id}`);

    res.send(user);
  } catch (error) {
    next(error);
  }
};
//
//
//
//
exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new Error(`No user with id: ${req.params.id}`);
    res.send(user);
  } catch (error) {
    next(error);
  }
};
