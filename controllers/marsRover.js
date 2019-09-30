const MarsRover = require('../models/marsRover');

module.exports = {
  index: (req, res) => {
    MarsRover.find({}).then(rover => {
      res.json(rover)
    });
  }
}