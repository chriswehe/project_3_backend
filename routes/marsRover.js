const express = require("express");
const router = express.Router();

const roverController = require("../controllers/marsRover");

router.get('/', roverController.index)
router.get("/:id", roverController.showID);


module.exports = router;
