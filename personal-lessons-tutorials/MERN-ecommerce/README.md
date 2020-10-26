# MERN project

```javascript
// installing express and the validator , validators are going to validate incoming request
npm install --save express express-validator
// mongoose for schemas queries etc
npm i mongoose

// result
  "dependencies": {
    "express": "^4.17.1",
    "express-validator": "^6.6.1",
    "mongoose": "^5.10.10"
  }
```

#### After this create the .env file and add the following:

```javascript
PORT = 2000;
```

#### Then create the src folder and add a file called index.server.js, add the following:

```javascript
const express = require("express");
const app = express();
//
// THIS WILL LISTEN to the port inside the .env file
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
```

#### NOW test it , type this:

```javascript
node src/index.server.js
//
//
//  ** RESULT **
server is running on port undefined
```

- ITS UNDEFINED because we havent installed the dotenv dependency

#### Install the "Dotenv" to check the port:

```javascript
npm i --save dotenv
//
//
//  *** RESULT ***
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.6.1",
    "mongoose": "^5.10.10"
  }
```

#### After installed the .env , require the LIBRARY and add the environment variable "config":

```javascript
const env = require("dotenv");
//
// environment variable or you can say constants
env.config();
```

#### NOW test the PORT again, type this:

```javascript
node src/index.server.js
//
//
//  ** RESULT **
server is running on port 2000
```

<br>
<br>
<hr>
<br>
<br>

#### CREATE the first hello API

```javascript
//
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server",
  });
});
```

#### Test it in postman, type this:

```javascript
// get method
localhost:2000/
```

#### NOW add this:

```javascript
// POST
app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});
//
```

### INSTALL nodemon to avoid typing all the time the stuff to init the SERVER:

```javascript
npm i nodemon

// *** RESULT ***
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.6.1",
    "mongoose": "^5.10.10",
    "nodemon": "^2.0.6"
  }
```

### ONCE nodemon has been installed, add the script commands to use nodemon:

```javascript
  "scripts": {
    "start": "nodemon ./src/index.server.js"
  },
  // *** RESULT **
  [nodemon] starting `node ./src/index.server.js`
server is running on port 2000
```

#### NOW check the postman, type :

```javascript
// on POST method, type the following:
localhost: 2000 / data;
// result:

{
}
/* its empty because we are not passing any DATA, we
 are just sending the api as a payload, to pass the DATA you have to set up
 some MIDDLEWARE



 */
```

#### Add the MIDDLEWARE to send data

```javascript
app.use(express.json());
```

<h5>
when you send the POST data and you test in POSTMAN , 
you wont see anything and that is because to see the 
result coming from json, you need some kind of parsing
 processor to transform it, thats why you need this :</h5>

```javascript
app.use(express.json())

 //to see the result in postman:
 {
    "message": {
        "name": "melooo"
    }
}
//before it was like that:
{}
```

<h5>
NOW there s another option to "express", apparently there s a another
library that has been designed for this purpose.:</h5>

- INSTALL IT

```javascript
npm install --save body-parser
```

- IMPORT IT , put it near the other libraries

```javascript
const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser"); //***
```

- REPLACE the express for the body parser

```javascript
// replace this:
app.use(express.json());
// for this:
app.use(bodyParser());
```

#### AFTER that run the server and go to post man to test if you still have the result:

```javascript
 {
    "message": {
        "name": "melooo"
    }
}
```

<br>
<br>

### INSTALL MONGO 🌱

<br>

#### I already have so i just have to type the following:

```javascript
// open the other terminal , type this:
sudo systemctl status mongodb
// then inside that other terminal open another tab
// type this to use the shell, to create the databases:
mongo
```

<br>

#### Open an account in MONGO ATLAS

```javascript
https://www.mongodb.com/cloud/atlas/register
```

![rested](./src/img/install_atlas.jpg)

#### Choose the Free option and the region

![rested](./src/img/cluster-option_region.jpg)

- Right now skip the 3 options after the regions as by default they give you the 512MB so click "Create Cluster" then wait for few minutes until is ready!

<br>

##### Once its READY you will have something like this

![rested](./src/img/cluster-ready-default.jpg)

##### ADD an IP address (we dont need it right now) , choose the "Allow access anywhere" and confirm.

![rested](./src/img/add-a-IP-address.jpg)

<br>

- if the 'Add IP access List Entry' dont show try to connect yoou in the compass, it worked for me.

- Once it is CONFIRMED , go to the CLUSTERS and if it s done it will give you the possibility to CONNECT, like in the image:

<br>

![rested](./src/img/cluster-connect.jpg)

<br>
<br>

##### 🍧 🍧 CLICK on CONNECT 🍧 🍧

### CREATE DATABASE | set up an user and a password

![rested](./src/img/create-database.jpg)

#

#### CREATE a CONNECTION

- type on the green button

![rested](./src/img/create-connection.jpg)

#### CONNECT your application

- FOR THIS PROJECT select the one with the orange arrow

- the green arrow is for when you want to use the shell to create the DB

![rested](./src/img/connect-your-application.jpg)

#### THE STRING you need to add in your project when connecting to the DB

- select the one with the arrow

![rested](./src/img/linkString_to-connect.jpg)

- Example from the Wagowsky App (this is how you will use the STRING LINK)

```javascript
try {
    const connection = await mongoose.connect(
      "mongodb+srv://wagowsky:12345@trial.utxhq.mongodb.net/trial?retryWrites=true&w=majority",
      // The question mark here: ?retry ,  THE QUESTION mark means that the QUERY starts here , like in the regex,
      // the following is to be used in case of warnings (deprecation etc)
      {
```

- the password has to be added manually just like in the Wagowsky link where you see 12345

#### COPY THE STRING LINK and go to Visual Studio and add the link but keep it hidden.

```javascript
env.config();
// ADD THE STRING LINK BELOW the env.config();
// MONGODB CONNECTION
// mongodb+srv://root:<password>@cluster0.ik0cr.mongodb.net/<dbname>?retryWrites=true&w=majority
```

<br>

#### NOW go to the mongoose official site and copy the following line:

![rested](./src/img/mongoose-link1.jpg)

```javascript
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

#### then add the library on top where all the requiring are

```javascript
const mongoose = require("mongoose");
```

<br>
<br>

#### MONGODB CONNECTION 🍧

- replace this and add the STRING LINK here:

```javascript
//before
.connect("mongodb://localhost:27017/test"
// after
.connect("mongodb+srv://root:<password>@cluster0.ik0cr.mongodb.net/<dbname>?retryWrites=true&w=majority"
```

#### It should look like this:

```javascript
mongoose
  .connect(
    "mongodb+srv://root:<password>@cluster0.ik0cr.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ) //add this
  .then(() => {
    console.log("Database connected");
  });
```

#### Notice the root

- This root has to be added inside the .env file

```javascript
 .connect(
    "mongodb+srv://root:<password>

```

### Like so

- all this information was added while creating the cluster, only the "ecommerce" isnt clear from where he is adding it, but i guess it s the database he is going to create, lets see.

```javascript
PORT = 2000;
// THE following 3 lines are connected to the cluster
MONGO_DB_USER = root;
MONGO_DB_PASSWORD = admin * 354;
MONGO_DB_DATABASE = ecommerce;
```

### NOW add the user, password and database. REPLACE the following:

```javascript
- root:<password>
- cluster0.ik0cr.mongodb
- <dbname>?retryWrites

```

#### IT SHOULD LOOK LIKE THIS:

- DONT FORGET to add the template literals (``) to introduce the STRING LINK

```javascript
// MONGODB CONNECTION

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
```
