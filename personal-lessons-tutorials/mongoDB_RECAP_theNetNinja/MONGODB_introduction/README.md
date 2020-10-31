## RECAP

- what is MONGO

- INstallation (I already have)

- Connecting to Mongo

<br>
<br>
<br>
<hr>
<br>

#### WHAT IS MONGO DB?

<p> NoSQL database, instead of storing data in tables we store it in collection, the easy thing of this
  is that since we use javascript objects its easier to communicate with the noSQL data.
  </p>

#### Connecting to Mongo

- Create a TEST folder to test the connection
- Create a file inside the TEST folder: connection.js

- REQUIRE Mongo:

```javascript
const mongoose = require("mongoose");
```

- CONNECT to mongodb

```javascript
mongoose.connect("mongodb://localhost/testaroo");
```

<p>The above practically says that we are connecting to "mongodb" database
  </p>

- //localhost

<p>Means that  we have connected MONGOdb locally 
  </p>

- //localhost/testaroo");

<p>testaroo correspond to the name of the database.
  </p>

- the .once in the line below means: just listen to this event ONCE

- the .open means: that once the connection is open, then you find/run this function

<br>

#### Although (what we just did in the lines above) this is going to run and connect our database, our application doesn't really know when that connection is completed.

###### For that you need the following:

```javascript
mongoose.connection.once("open", function () {
  console.log("Connection error", error);
});
```

- Just as .once which is an event listener that works "once",
  we can add another event listener but this one
  will take care of the ERRORS-

- Instead of just listening
  once for the "errors", we want to listen it for every error that
  we could encounter, so instead of .ONCE we use .ON

```javascript
on("error", function () {});
```

- So what it means here, is that whenever there is an ("error", it will run this callback function: function(){

     <br>

  ```javascript
  // HOW IT SHOULD LOOK LIKE
  //
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made... made some BUZZ");
    })
    .on("error", function (error) {
      console.log("Connection error", error);
    });
  ```

   <br>

###### NOW test it, type:

- node test/connection.js

<br>
<br>
<br>
<hr>
<br>

#### WHAT ARE COLLECTIONS?

<p>
  </p>

<br>
<br>

#### CREATE THE "MODELS" folder and the mariochar.js file

- Inside the mariochar.js that lays inside the MODELS folder

- CREATE A SCHEMA for each of the records based on this model "mario character" for example like in the image)

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// require the mongoose property Schema to create a Schema

// CREATE SCHEMA AND MODEL
const MarioCharSchema = new Schema({
  // the new Schema makes reference to this: mongoose.Schema;

  name: String,
  wight: Number,
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);
```

- mariochar correspond to the MODEL,
  and this is our collection name.

  ```javascript
  model("mariochar",
  ```

- You are going to base this MODEL
  on a particular SCHEMA, this Schema
  right here: "MarioCharSchema".

  ```javascript
  mongoose.model("mariochar", MarioCharSchema);


  ```
