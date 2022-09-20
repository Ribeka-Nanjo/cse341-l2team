const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./config/database");

app.use(
	cors({
		origin: "*",
	})
);

app.use("/", require("./routes"));
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
