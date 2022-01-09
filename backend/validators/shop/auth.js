const { body } = require('express-validator');

// Database models
const User = require('../../models/User');

// Utility functions
const isPhoneNumber = require('../../utils/isPhoneNumber');
const isEmail = require('../../utils/isEmail');
const isStrongPassword = require('../../utils/isStrongPassword');

exports.signup = body('data').custom(async data => {
  // Requirement missing
  if (!data.devId) throw new Error('422~Requirement missing~devId');
  if (!data.username) throw new Error('422~Requirement missing~username');
  if (!data.phone) throw new Error('422~Requirement missing~phone');
  if (!data.password) throw new Error('422~Requirement missing~password');
  if (!data.confirm) throw new Error('422~Requirement missing~confirm');
  // Username Already registered
  let user = await User.findOne({ username: data.username });
  if (user) {
    throw new Error('409~Username already registered~username');
  }
  // Email Already Registered
  if (data.email) {
    user = await User.findOne({ email: data.email });
    if (user) {
      throw new Error('409~Email already registered~email');
    }
  }
  // Phone Number Already Registered
  user = await User.findOne({ phone: data.phone });
  if (user) {
    throw new Error('409~Phone number already registered~phone');
  }
  // Not a phone number
  if (!isPhoneNumber(data.phone))
    throw new Error('422~Not a phone number~phone');
  // Not an email address
  if (data.email && !isEmail(data.email))
    throw new Error('422~Not an email address~email');
  // Password is weak
  if (!isStrongPassword(data.password))
    throw new Error('422~Password is weak~password');
  // Passwords don't match
  if (data.password !== data.confirm)
    throw new Error("422~Passwords don't match~confirm");
  return true;
});

exports.login = body('data').custom(data => {
  // Requirement missing
  if (!data.devId) throw new Error('422~Requirement missing~devId');
  if (!data.user) throw new Error('422~Requirement missing~user');
  if (!data.password) throw new Error('422~Requirement missing~password');
  if (!data.userType) throw new Error('422~Requirement missing~userType');
  // Wrong password (due to weakness)
  if (!isStrongPassword(data.password))
    throw new Error('401~Wrong password~password');
  //Not a username Type
  if (
    data.userType != 'email' &&
    data.userType != 'phone' &&
    data.userType != 'username'
  )
    throw new Error('422~Not a username type~userType');
  //Not a phone number
  if (data.userType === 'phone' && !isPhoneNumber(data.user))
    throw new Error('422~Not a phone number~user');
  //Not an email address
  if (data.userType === 'email' && !isEmail(data.user))
    throw new Error('422~Not an email address~user');
  return true;
});

exports.refresh = body('data').custom(data => {
  //Data is not correct
  if (!data.devId) throw new Error('422~Requirement missing~devId');
  if (!data.token) throw new Error('422~Requirement missing~token');
  if (!data.refresh) throw new Error('422~Requirement missing~refresh');
  return true;
});
