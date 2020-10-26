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
//
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
