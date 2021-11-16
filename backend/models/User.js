//Third-party libraries
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User model schema
// This schema is used for seller users
// Name must be changed to be more appropriate 
const User = new Schema({
  // Schema Version is used for determining need for online migrations
  schemaVersion: {
    type: String,
    default: 'V0.1-1.0',
  },
  name: {
    type: Object,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  shopAddress: {
    type: String,
    required: false,
  },
  gpsLocation: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    default: 'none',
  },
});

module.exports = mongoose.model('User', User);
