const express = require("express");
const app = express();

const index = require("./routes/index");

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

//
// related to  500  error, this error will show if you dont have the line below
app.use(express.json()); // parse incoming bodies... we can access then the data in req.body everywhere
//

app.use("/index", index);
