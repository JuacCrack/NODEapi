const contactService = require('../services/contactService');

async function getAllContacts(req, res) {
  const contacts = contactService.getAllContacts();
  res.json(contacts);
}

async function getContactById(req, res) {
  const contact = contactService.getContactById(parseInt(req.params.id, 10));
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
}

async function addContact(req, res) {
  const contact = contactService.addContact(req.body);
  res.status(201).json(contact);
}

async function updateContact(req, res) {
  const contact = contactService.updateContact(parseInt(req.params.id, 10), req.body);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
}

async function deleteContact(req, res) {
  const contact = contactService.deleteContact(parseInt(req.params.id, 10));
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
};
