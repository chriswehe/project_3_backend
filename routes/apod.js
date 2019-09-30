const express = require("express");
const router = express.Router();

const apodController = require("../controllers/apod");

router.get("/", apodController.index)

module.exports = router;