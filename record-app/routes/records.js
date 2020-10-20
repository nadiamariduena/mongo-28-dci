var express = require("express");
var router = express.Router();

const {
  getAllRecords,
  addRecord,
  getRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordsController");

// GET ALL RECORDS on route /records/
router.get("/", getAllRecords);

// GET A SPECIFIC RECORD on route /records/:id
router.get("/:id", getRecord);

// CREATE A RECORD on route /records/
router.post("/", addRecord);

// UPDATE A RECORD on route /records/:id
router.patch("/:id", updateRecord);

// DELETE A RECORD on route /records/:id
router.delete("/:id", deleteRecord);

module.exports = router;
