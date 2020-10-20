var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

// GET ALL RECORDS on route /records/
router.get("/", getAllUsers);

// GET A SPECIFIC RECORD on route /records/:id
router.get("/:id", getUser);

// CREATE A RECORD on route /records/
router.post("/", addUser);

// UPDATE A RECORD  on route /records/:id
router.patch("/:id", updateUser);

// DELETE A RECORD on route /records/:id
router.delete("/:id", deleteUser);

module.exports = router;
