const express = require("express");
const bodyParser = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

const uri =
	"mongodb+srv://ribekananjo:<password>@cluster0.qfou8eh.mongodb.net/?retryWrites=true&w=majority";
app.use("/", require("./routes"));

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}

connect();

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
