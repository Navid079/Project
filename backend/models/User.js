//Third-party libraries
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schemaVersion = 'V0.1-4.0';

// User model schema
// This schema is used for seller users
// Name must be changed to be more appropriate
const User = new Schema({
  // Schema Version is used for determining need for online migrations
  schemaVersion: {
    type: String,
    default: schemaVersion,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    first: {
      type: String,
      default: '',
    },
    last: {
      type: String,
      default: '',
    },
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
  postalCode: {
    type: String,
    required: false
  },
  nationalCode: {
    type: String,
    required: false
  },
  idNumber: {
    type: String,
    required: false
  },
  gpsLocation: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    default: 'none',
  },
  mediaLink: [String],
  profilePicture: {
    type: String,
    default: 'avatar.jpg'
  },
  validated: {
    type: Boolean,
    default: false,
  },
});

exports.migrate = async user => {
  switch (user.schemaVersion) {
    case 'V0.1-2.0':
      user.name = {
        first: '',
        last: '',
      };
      break;
    case 'V0.1-3.0':
      user.name = {
        first: '',
        last: '',
      };
      break;
    default:
      return;
  }
  user.schemaVersion = schemaVersion;
  await user.save();
};

exports.User = mongoose.model('User', User);
exports.version = schemaVersion;
