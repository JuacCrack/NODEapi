let contacts = [];
let id = 1;

function getAllContacts() {
  return contacts;
}

function getContactById(contactId) {
  return contacts.find(contact => contact.id === contactId);
}

function addContact(contact) {
  contact.id = id++;
  contacts.push(contact);
  return contact;
}

function updateContact(contactId, updatedContact) {
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index !== -1) {
    contacts[index] = { id: contactId, ...updatedContact };
    return contacts[index];
  }
  return null;
}

function deleteContact(contactId) {
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index !== -1) {
    return contacts.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
};
