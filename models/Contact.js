const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  address: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
