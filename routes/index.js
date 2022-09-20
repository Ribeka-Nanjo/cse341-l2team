const router = require("express").Router();
const professionalRouter = require("./professionals");

router.get("/", (req, res) => {
	console.log("Health check");
	res.status(200).send("Health check");
});

router.use("/professional", professionalRouter);

module.exports = router;
