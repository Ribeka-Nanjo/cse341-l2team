const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts/contacts'));

// router.get('/', (req, res) => {
//   res.send('Hello world');
// });

module.exports = router;
