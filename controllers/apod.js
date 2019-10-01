const APOD = require('../models/apod')

module.exports = {
    index: (req, res) => {
        APOD.find({}).then(photo => {
            res.json(photo);
        })
    },
    showTitle: (req, res) => {
        APOD.findOne({
            title: req.params.title
        })
        .then(card => {
            res.json(card)
        })
    }
}