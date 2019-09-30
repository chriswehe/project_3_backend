const APOD = require('../models/apod')

module.exports = {
    index: (req, res) => {
        APOD.find({}).then(photo => {
            res.json(photo);
        })
    }
}