const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signin", (req, res) => {});
//
//
//
router.post("/signup", (req, res) => {
  // findOne will prevent the user to signUp with the same email if it already exists.
  //
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      // if user exists: send error 400, User already registered
      return res.status(400).json({
        message: "User already registered",
      });

    const {
      // this correspond to all what the user has to give,
      //   the req.body correspond to all that user information

      firstName,
      lastName,
      email,
      password,
    } = req.body;
    //Its says YOU KNOW WHAT create a new User:
    // new User(
    //  "based" on
    //the User model user.js/models , and pass inside those guys
    // (req.body);
    //so the data the user is giving:
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(), //its going to generate some random number
    });
    // here you are saving the NEW USER
    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      /*
                400 Bad Request response status code indicates that 
                the server cannot or will not process the request due
                to something that is perceived to be a client error 
                (e.g., malformed request syntax, invalid request message
                    framing, or deceptive request routing).
    
    */

      if (data) {
        return res.status(201).json({
          user: data,
        });
      }
    });
    /*
                            The HTTP 201 Created success status response code 
                            indicates that the request has succeeded and has 
                            led to the creation of a resource. ... The common 
                            use case of this status code is as the result of 
                            a POST request.
                            
    */
    //----------
  });
});
module.exports = router;
