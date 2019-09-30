const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const amateurAstronomerSchema = new Schema({
    url: String,
    title: String,
    author: String,
    description: String
});
const AmateurAstonomer = mongoose.model("AmateurAstonomer", amateurAstronomerSchema);

module.exports = AmateurAstonomer;