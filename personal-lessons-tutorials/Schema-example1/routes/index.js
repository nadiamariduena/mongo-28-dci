var express = require("express");
var router = express.Router();
var SnackModel = require("../models/snack.model.js");

// GET home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//
//
router.get("/snack", function (req, res, next) {
  res.render("index", { title: "snack time" });
});
//
//
//
router.post("/snack/favorite", favoriteSnackController);

function favoriteSnackController(req, res, next) {
  if (req.body.snack === "pudding") {
    return res.json({ question: "what flavor" });
  } else if (req.body.snack === "popcorn") {
    return res.json({ question: "chedda" });
  } else {
    return res.json({ comment: "that is not a real snack" });
  }
}

//
//
router.post("/snack/ingredients", ingredientController);
//
router.get("/snack/new", createNewSnack);

function ingredientController(req, res, next) {
  if (req.body.snack === "hummus") {
    return res.json({ ingredients: { 1: "chickpead", 2: "tahini" } });
  }
}

// related to the snack,schema.js and to line 34
//
//
function createNewSnack() {
  SnackModel.Insert();
}

module.exports = router;
