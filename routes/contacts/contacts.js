// const routes = require('express').Router();
// const { getAllContacts, getContactById } = require('../../controllers/contacts/contacts');

// routes.get('/', getAllContacts);
// routes.get('/:id', getContactById);

// module.exports = routes;

const express = require('express');
const router = express.Router();

const contactsController = require('../../controllers/contacts/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
