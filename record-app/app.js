const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

/** CONNECT TO DB */
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/record-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/*

Concerning this error:

(node:10622) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.


              Reason:

The issue is that mongoose still uses collection.ensureIndex 
and should be updated by them in the near future. To get rid of the 
message you can downgrade by using version 5.2.8 in your package.json (and delete any caches, 
last resort is to uninstall it the install it with npm install mongoose@5.2.8):

              solution:

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

            Add it here:

// CONNECT TO DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fbw28-record-store", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



*/

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log(`You are connected to the DB.`);
});

/** ROUTERS */
const usersRouter = require("./routes/users");
const recordsRouter = require("./routes/records");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/** MIDDLEWARES */
app.use(express.json({ extended: false }));
app.use(cors());

// CONTROLLER for the HOME ROUTE
const sayHello = (req, res) => {
  res.send({ welcome: "Welcome to the Record Store API" });
};

/** HOME ROUTE */
app.get("/", sayHello);

// HOOK IN OUR ROUTERS (= CHILD APIs) into our main api (= app)
app.use("/users", usersRouter);
app.use("/records", recordsRouter);

// MIDDLEWARE - how to pass on a request
// on success: next()
// on error:
//    either #1: res.json({error: "You did wrong!"}) or...
//    better #2: next( { message: "You did worng", code: <errorCode> } )
// approach #2 is better because we always call our generic handler
//  which makes sure, all error responses from our backend
//  have always the same, reliable structure

// 404 handler => kicks in if we did not found any matching route handler
app.use((req, res, next) => {
  /** approach #1: terminate the response right away... */
  // res.status(404).json({
  //   error: `The route ${req.url} does not exist`
  // })

  /** approach #2 (preferred):
   * forward the error to our generic error handler below */
  let error = new Error(`The route ${req.url} does not exist`);
  error.code = 404;
  next(error);
});

// GENERIC ERROR HANDLER MIDDLEWARE OF EXPRESS
// - this will kick in on every error that our CODE produced!
app.use((err, req, res, next) => {
  // log the WHOLE ERROR information just to US INTERNALLY
  // including the line numbers where the error happened, so we can debug easily
  // console.log(err);

  // this is the error response for our users
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
