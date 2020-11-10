const mongoose = require('mongoose');
const db = require('./index.js');

const physicianSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  clicked: Boolean,
  patients: [{
    firstName: String,
    lastName: String,
    time: String,
    kind: Number,
  }],
});

const Physician = mongoose.model('Physician', physicianSchema);