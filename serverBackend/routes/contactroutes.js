// christopher Esguerra contactroutes.js

import express from 'express';
const router = express.Router();
import Contact from '../models/contact.js';
import auth from '../middleware/authController.js';

///Referencing https://mongoosejs.com/docs/api/model.html

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ created: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body); // Ensure req.body matches ContactSchema
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE contact
router.put('/:id', async (req, res) => {
  try {
    // Optionally set updated if you want to control it manually:
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete('/', async (req, res) => {
  try {
    const deletedContacts = await Contact.deleteMany();
    if (deletedContacts.deletedCount === 0) return res.status(404).json({ error: 'No contacts found' });
    res.json({ message: 'Contacts deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;