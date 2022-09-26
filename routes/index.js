const express = require('express');
const router = express.Router();

router.use('/', require('./contacts/swagger'));
router.use('/contacts', require('./contacts/contacts'));

module.exports = router;
