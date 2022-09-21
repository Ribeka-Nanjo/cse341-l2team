// //connnect .env
// const dotenv = require("dotenv");
// dotenv.config();

// //the content of controller contact.js
// //Store mongo connection
// const MongoClient = require("mongodb").MongoClient;

// let _db;

// const initDb = (callback) => {
// 	if (_db) {
// 		console.log("Db is already initialized!");
// 		return callback(null, _db);
// 	}
// 	MongoClient.connect(process.env.MONGODB_URI)
// 		.then((client) => {
// 			_db = client;
// 			callback(null, _db);
// 		})
// 		.catch((err) => {
// 			callback(err);
// 		});
// };

// const getDb = () => {
// 	if (!_db) {
// 		throw Error("Db not initialized");
// 	}
// 	return _db;
// };

// module.exports = {
// 	initDb,
// 	getDb,
// };

require("dotenv").config();
const mongoose = require("mongoose");

module.exports = mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to Mongo Atlas DB"))
	.catch((err) => console.error(err));
