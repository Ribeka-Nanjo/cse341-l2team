const express = require("express");
const professionalController = require("../../controllers/contacts/contacts");
const router = express.Router();

router.get("/", professionalController.getData);
// localhost:8080/professional/
module.exports = router;
