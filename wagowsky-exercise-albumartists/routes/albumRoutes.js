// IMPORTING EXPRESS
const express = require("express");

//DEFINING AND INITIALISING EXPRESS-ROUTER
const router = express.Router();

// IMPORTING THE RELEVANT CONTROLLER METHODS
const { getAlbums } = require("../controllers/albumControllers.js");

// CONNECTING A SPECIFIC ROUTE TO A SPECIFIC CONTROLLER METHOD
// GET METHOD, API/ALBUMS
router.route("/").get(getAlbums);

// EXPORTING ROUTER
module.exports = router;
