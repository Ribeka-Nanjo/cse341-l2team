const router = require("express").Router();

const professionalController = require("../controllers/professionals");

router.get("/", professionalController.getProfessional);

module.exports = router;
