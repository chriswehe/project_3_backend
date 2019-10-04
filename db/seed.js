const apodJsonData = require('./data/apod.json');
const marsRoverJsonData = require('./data/marsRover.json');

const APOD = require('../models/apod');
const MarsRoverPhoto = require('../models/marsRover');
const AmateurPhoto = require('../models/amateurAstronomer')

APOD.deleteMany({}).then(() => {
    APOD.create(apodJsonData).then((photos) => {
        console.log(photos)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

MarsRoverPhoto.deleteMany({}).then(() => {
    MarsRoverPhoto.create(marsRoverJsonData).then((photos) => {
        console.log(photos)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

AmateurPhoto.deleteMany({})