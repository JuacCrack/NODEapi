const contactModel = require('../models/contactModel');

function getAllContacts() {
  return contactModel.getAllContacts();
}

function getContactById(id) {
  return contactModel.getContactById(id);
}

function addContact(contact) {
  return contactModel.addContact(contact);
}

function updateContact(id, updatedContact) {
  return contactModel.updateContact(id, updatedContact);
}

function deleteContact(id) {
  return contactModel.deleteContact(id);
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
};
