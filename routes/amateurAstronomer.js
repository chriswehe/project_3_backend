const express = require("express");
const router = express.Router();

const amateurController = require("../controllers/amateurAstronomer");

router.get("/",amateurController.index)

module.exports = router;
