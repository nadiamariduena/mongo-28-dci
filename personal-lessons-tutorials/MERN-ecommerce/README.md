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
