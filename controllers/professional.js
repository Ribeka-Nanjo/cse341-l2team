const mongodb = require("../config/database");

const getData = async (req, res, next) => {
	const result = await mongodb.getDb().db().collection("user").find();
	result.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists[0]); // we just need the first one (the only one)
	});
};

module.exports = { getData };

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
