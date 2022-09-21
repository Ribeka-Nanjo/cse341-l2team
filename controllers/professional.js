// const Contacts = require("../models/professionals");

// const getAllContacts = async (req, res) => {
// 	try {
// 		// Get all contacts from the database
// 		const result = await Contacts.find();
// 		//Return the response
// 		res.json(result);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const getContactById = async (req, res) => {
// 	try {
// 		// Get all contacts from the database
// 		const result = await Contacts.findById(req.params.id);
// 		//Return the response
// 		res.json(result);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// module.exports = { getAllContacts, getContactById };

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
