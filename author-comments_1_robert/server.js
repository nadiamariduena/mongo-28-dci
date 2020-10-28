const express = require("express");
//1 PORT related,  install the .env   npm i dotenv
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const { Schema, model } = mongoose; //add the functions,  import this otherwise the schema will not work
//
// environment variable or you can say constant
//  2 PORT related
env.config();

//--------------------
// Way without .env
// let PORT = 5000;
// app.listen(PORT, () => console.log("Server running and on fire"));
// --------------------

mongoose
  .connect("mongodb://localhost/blog_db", {
    // the following lines will prepare you for any eventual warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB succesfully"))
  .catch((err) => console.log("Connection failed", err.message));

// Create the MODELs and the respective SCHEMAS

/*-----------------


    **  YOU CAN MAke SCHEMA FOR A COMMENT **
      
          const CommentSchema = new Schema({
                  text: {
                    type: String,
                    required: true,
                  },
        });
      
      the schema above is 
      connected to the following :
            },
            // Posts can have 0 comments or many
            comments: [CommentSchema],
          });

                          *****           ***

          After you have set up the comment schema , you will need
          to create the MODULE, THE MODEL is going to set/store a RECORD 
          of this structure in the database.

          1 add the model , inside the curly brackets:

                  const { Schema, model } = mongoose; 

          2 DEFINE A MODEL to store a record of the schema

          const Post = model("Post", PostSchema);

          3 now you can do operations , DEFINE a SEED

                app.get("/seed", (req, res, next) => {


                      const post = new Post({

                  })
                })


--------------------*/

//
// EMBEDDING : incrustación -------------
//
const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

//
// EXAMPLE : EMBEDDING / NESTING A SCHEMA
// the library: Schema({
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  // Posts can have 0 comments or many
  comments: [CommentSchema],
  //here you can have multiple comments, just like [CommentSchema]
});
// --------------------------------------
//
//
//  KEEPING A RECORD OF THE SCHEMA STRUCTURE with the model
const Post = model("Post", PostSchema);
//
//
app.get("/seed", (req, res, next) => {
  //
  //
  const post = new Post({
    title: "Mongoose sucks - can anyone HELP?",
    author: "Me",
    comments: [
      {
        text: "Mongoose is not that hard, Try harder",
      },
    ],
  });
});
/*











*/
// --------------------------------------
//        HARD CODED
// --------------------------------------

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
      { _id: 1, title: "I think mongoose POPULATE will help you." },
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
