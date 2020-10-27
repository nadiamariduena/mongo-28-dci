const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// -------------
//    ROUTES
// -------------

const userRoutes = require("./routes/user");
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
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

// app.use(express.json()); //before the body parser
app.use(bodyParser());
// CREATE the MIDDLEWARE to manipulate our data
// /api is just a prefixe like a path
app.use("/api", userRoutes);
// this userRoute is the data connected to the file user.js inside the ROUTES in line 11:  const userRoutes = require("./routes/user");

//
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
