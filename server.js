const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
app.use("/", require("./routes"));
app.listen(PORT, () => {
	console.log(`Connected to DB and listening on ${port}`);
});
