const express = require("express");
const router = express.Router();

const roverController = require("../controllers/marsRover");

router.get('/', roverController.index)

module.exports = router;
