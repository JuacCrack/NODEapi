const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

/**
 * @openapi
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: List of all contacts
 */
router.get('/', contactController.getAllContacts);

/**
 * @openapi
 * /api/contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact object
 *       404:
 *         description: Contact not found
 */
router.get('/:id', contactController.getContactById);

/**
 * @openapi
 * /api/contacts:
 *   post:
 *     summary: Add a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created
 */
router.post('/', contactController.addContact);

/**
 * @openapi
 * /api/contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated
 *       404:
 *         description: Contact not found
 */
router.put('/:id', contactController.updateContact);

/**
 * @openapi
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact deleted
 *       404:
 *         description: Contact not found
 */
router.delete('/:id', contactController.deleteContact);

module.exports = router;
