const router = require("express").Router();
const professionalRouter = require("./professionals");

router.get("/", (req, res) => {
	console.log("good");
	res.status(200).send("good");
});

router.use("/professional", professionalRouter);

module.exports = router;
