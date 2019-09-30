const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const apodSchema = new Schema({
    copyright: String,
    date: String,
    explanation: String,
    hdurl: String,
    title: String,
    url: String
})

const apod = mongoose.model("APOD", apodSchema)

module.exports = apod