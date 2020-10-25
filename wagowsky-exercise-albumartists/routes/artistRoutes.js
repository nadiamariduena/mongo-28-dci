// IMPORTING EXPRESS
const express = require("express");

//DEFINING AND INITIALISING EXPRESS-ROUTER
const router = express.Router();

// IMPORTING THE RELEVANT CONTROLLER METHODS
const { getArtists } = require("../controllers/artistControllers.js");

// CONNECTING A SPECIFIC ROUTE TO A SPECIFIC CONTROLLER METHOD
// GET METHOD, API/ALBUMS
router.route("/").get(getArtists);

// EXPORTING ROUTER
module.exports = router;
