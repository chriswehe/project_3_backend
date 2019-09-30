const AmateurAstronomer = require("../models/amateurAstronomer");

module.exports = {
  index: (req, res) => {
    AmateurAstronomer.find({}).then(photo => {
      res.json(photo)
    });
  },
  create: (req, res) => {
    const newAstronomer = req.body;
    
    AmateurAstronomer.create(newAstronomer).then(photo => res.json(photo));
  },
  delete: (req, res) => {
      AmateurAstronomer.findOneAndDelete({title: req.params.title})
        .then(photo => {
            res.json(photo)
        })
  },
  update:(req, res) => {
      AmateurAstronomer.findOneAndUpdate({title: req.params.title}, req.body)
        .then(photo => {
            res.json(photo)
        })
  },
}