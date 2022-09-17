const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri =
	"mongodb+srv://ribekananjo:Poteribeto06!@cluster0.qfou8eh.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}

app.get("/", (req, res) => {
	res.send("Hello World!");
});

connect();

app.listen(8080, () => {
	console.log("Server started on port 8080");
});
