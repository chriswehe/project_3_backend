const express = require("express");
const router = express.Router();

const apodController = require("../controllers/apod");

router.get("/", apodController.index);
router.get("/:title", apodController.showTitle);

module.exports = router;