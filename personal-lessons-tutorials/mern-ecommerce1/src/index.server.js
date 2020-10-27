const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//
// environment variable or you can say constants
env.config();
//

// MONGODB CONNECTION
// mongodb+srv://root:<password>@cluster0.ik0cr.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ik0cr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

// MIDDLEWARE
/*

when you send the POST data and you test in POSTMAN , 
you wont see anything and that is because to see the 
result coming from json you need some kind of parsing
 processor to transform it, thats why you need this :

app.use(express.json())

 to see the result in postman:
 {
    "message": {
        "name": "melooo"
    }
}
before it was like that:
{}

NOW there s another option to express, apparently there s a another
library that has been designed for this purpose.

npm install --save body-parser




 */
// app.use(express.json()); //before the body parser
app.use(bodyParser());

//
//GET
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server",
  });
});
//
//
// POST
app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});
//
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
