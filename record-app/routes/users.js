var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getOrdersByUser,
} = require("../controllers/usersController");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

router.route("/:id/orders").get(getOrdersByUser);

module.exports = router;

/*

BEFORE ******

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
*/
