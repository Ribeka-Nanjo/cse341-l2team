// const express = require("express");
// const professionalController = require("../controllers/professional");
// const router = express.Router();

// router.get("/", professionalController.getData);
// // localhost:8080/professional/

// module.exports = router;

const router = require("express").Router();

const professionalController = require("../controllers/professionals");

router.get("/", professionalController.getProfessional);

module.exports = router;
