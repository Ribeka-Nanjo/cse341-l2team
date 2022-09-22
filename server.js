const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./config/database");

// const uri =
// 	"mongodb+srv://ribekananjo06!:@cluster0.qfou8eh.mongodb.net/?retryWrites=true&w=majority";
// app.use("/", require("./routes"));
// async function connect() {
// 	try {
// 		await mongoose.connect(uri);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
