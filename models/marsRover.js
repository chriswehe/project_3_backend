const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


const roverPhotoSchema = new Schema ({
	camera: {
		name: String,
		full_name: String
	},
	img_src: String,
	earth_date: String,
	rover: {
		name: String,
		landing_date: String
	}
})

const RoverPhoto = mongoose.model("RoverPhoto", roverPhotoSchema)

module.exports = RoverPhoto
