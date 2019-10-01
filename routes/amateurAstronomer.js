const express = require("express");
const router = express.Router();

const amateurController = require("../controllers/amateurAstronomer");

router.get("/",amateurController.index);
router.get("/:title", amateurController.showTitle);
router.delete('/:title', amateurController.delete);
router.post('/', amateurController.create)
router.put('/:title', amateurController.update)

module.exports = router;
