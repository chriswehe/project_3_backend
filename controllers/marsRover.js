const MarsRover = require('../models/marsRover');

module.exports = {
  index: (req, res) => {
    MarsRover.find({}).then(rover => {
      res.json(rover)
    });
  },
  showID: (req, res) => {
    MarsRover.findOne({
        id: req.params.id
    })
    .then(card => {
        res.json(card)
    })
}
}