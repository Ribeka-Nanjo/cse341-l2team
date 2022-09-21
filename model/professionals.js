const mongoose = require("mongoose");

const professionalSchema = mongoose.Schema({
	professionalName: {
		type: String,
	},
	base64Image: {
		type: String,
	},
	nameLink: {
		firstName: {
			type: String,
		},
		url: {
			type: String,
		},
	},
	primaryDescription: {
		type: String,
	},
	workDescription1: {
		type: String,
	},
	workDescription2: {
		type: String,
	},
	linkTitleText: {
		type: String,
	},
	linkedInLink: {
		text: {
			type: String,
		},
		link: {
			type: String,
		},
	},
	githubLink: {
		text: {
			type: String,
		},
		link: {
			type: String,
		},
	},
});

module.exports = mongoose.model("professionals", professionalSchema);
