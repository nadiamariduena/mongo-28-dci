const express = require("express");
//1 PORT related,  install the .env   npm i dotenv
const env = require("dotenv");
const app = express();

//
// envirenment variable or you can say constant
//  2 PORT related
env.config();
//--------------------
// Way without .env
// let PORT = 5000;
// app.listen(PORT, () => console.log("Server running and on fire"));
// --------------------

//
//
//
// request a blog post by ID
app.get("/blogpost/:id", (req, res, next) => {
  //
  let { id } = req.params; // grab a id from the URL
  //
  res.send({
    //   the id of the user, the id's inside the user are the id's of his posts
    id: "123",
    // title 
    title: "Most efficient structure of mongose Schema",
    answers: [
      {
        _id: 1,
        title: "I think mongoose POPULATE will help you.",
      },
      {
        _id: 2,
        title:
          "Please look this Models and queries that can help you to build your schema",
      },
    ],
  });
  //   --------
});

// 3 PORT related
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
