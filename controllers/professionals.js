const professionalSchema = require("../models/professionals");

const getProfessional = async (req, res) => {
	await professionalSchema
		.find()
		.then((data) => res.json(data[0]))
		.catch((err) => res.json({ error: err }));
};

module.exports = {
	getProfessional,
};
