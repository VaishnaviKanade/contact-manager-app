const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ➕ CREATE a new contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    console.error("Error creating contact:", err.message);
    res.status(400).json({ message: err.message });
  }
});

// 📋 READ all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// ✏️ UPDATE a contact
router.put("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error("Error updating contact:", err.message);
    res.status(400).json({ message: err.message });
  }
});

// ❌ DELETE a contact
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Error deleting contact:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
