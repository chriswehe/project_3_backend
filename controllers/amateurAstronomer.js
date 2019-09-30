const AmateurAstronomer = require("../models/amateurAstronomer");

module.exports = {
  index: (req, res) => {
    AmateurAstronomer.find({}).then(amateur => {
      res.json(amateur)
    });
  }
}