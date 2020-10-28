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

//           CREATE THE MONGOOSE CONNECTION

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

//1 EMBEDDING : incrustación -------------
//before : const CommentSchema = new Schema({
const AnswerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

//
//2 EXAMPLE : EMBEDDING / NESTING A SCHEMA
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
  answers: [AnswerSchema],
  //here you can have multiple comments, just like [CommentSchema]
});
// --------------------------------------
//
//
//3  KEEPING A RECORD OF THE SCHEMA STRUCTURE with the model
const Post = model("Post", PostSchema);
//
//4
app.get("/seed", async (req, res, next) => {
  //
  //
  // 8 CLEAN all with DELETE MANY
  await Post.deleteMany(); //delete all collections from

  //5
  const post = new Post({
    title: "Mongoose sucks - can anyone HELP?",
    author: "Me",
    answers: [
      {
        text: "Mongoose is not that hard, Try harder",
      },
      {
        text: "The author is right, Mongoose sucks, there s no point!",
      },
    ],
  });

  // ASYNC AWAIT , add the async here: app.get("/seed", async (req, res, next) => {
  let postDB = await post.save();
  //
  //
  // 7
  res.send(postDB);
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
