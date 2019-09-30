const express = require('express')
const router = express.Router();

router.use('/apod', require('./apod'));
router.use('/rover', require('./marsRover'));
router.use('/amateur', require('./amateurAstronomer'))

router.all('*', (req, res) => {
    res.status(400).send();
})

module.exports = router;