```javascript
//  usersControllers.js
exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const data = await user.save();

    res.send(data);
  } catch (error) {
    next(error);
  }
};
/*The req.body is the data the user is passing, like so:
//POSTMAN, on POST method
{
"firstName": "Steve",
 "lastName": "Seasgull",
 "password": "12356",
 "firstName": "russian@gmail.com",

}
*/

//So this line
const user = new User(req.body);
//means:

//Its says YOU KNOW WHAT create a new User:
new User(
//  "based" on
//the User model User.js , and pass inside those guys
(req.body);
//so the data the user is giving:
/* {
"firstName": "Steve",

etc ...
*/


```

```javascript
// BEFORE
//  usersControllers.js
exports.addUser = async (req, res) => {
  const user = new User(req.body); //here you create the user
  await user.save(); //here you save the suer to the DATA BASE
};
```

```javascript
// AFTER
//  usersControllers.js
exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const data = await user.save(); //save() will save it to the database

    res.send(data); //sending back the data saved in the data base
    //  every time you use async await you do : try catch because otherwise you are fucked
  } catch (error) {
    next(error); //the generic  error message is in app.js
  }
};
/*
                    ** TRY / CATCH EXPLANATION **

  what are you going to try :

    const user = new User(req.body);
    const data = await user.save(); //save() will save it to the database

    res.send(data);

    AND IF FOR SOME REASON theres something wrong **
    
    THEN catch it with an error, the error is in app,js:

  let error = new Error(`The route ${req.url} does not exist`);
  error.code = 404;
  next(error);

  // * forward the error to our generic error handler below  *
  ------------------------------------------------------------

SO THAT IS WHAT THIS MEANS:

  try {
    const user = new User(req.body);
    const data = await user.save(); //save() will save it to the database

    res.send(data); //sending back the data saved in the data base
    //  every time you use async await you do : try catch because otherwise you are fucked
  } catch (error) {
    next(error);
  }
};

  
});
  
  
  */
```

<br>
<hr>
<br>
