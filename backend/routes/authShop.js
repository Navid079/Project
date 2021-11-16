// Third-party libraries
const express = require('express');
const { body } = require('express-validator');

// Database models
const User = require('../models/User');
const authShopController = require('../controllers/authShop');

// Utility functions
const isPhoneNumber = require('../utils/isPhoneNumber');
const isEmail = require('../utils/isEmail');
const isStrongPassword = require('../utils/isStrongPassword');

const router = express.Router();

// POST /shop/signup
// This endpoint is used for signing up of sellers
router.post(
  '/signup',
  // ========== Validation ========== //
  [
    body('data')
      .custom(data => {
        //Data is not correct
        if (
          !data.name ||
          !data.name.first ||
          !data.name.last ||
          typeof data.name.first !== 'string' ||
          typeof data.name.last !== 'string'
        )
          throw new Error('422~Data is not correct~name');
        if (!data.phone) throw new Error('422~Data is not correct~phone');
        if (!data.password) throw new Error('422~Data is not correct~password');
        if (!data.confirm) throw new Error('422~Data is not correct~confirm');
        return true;
      })
      .custom(data => {
        // Email Already Registered
        if (!data.email) return true;
        return User.findOne({ email: data.email }).then(user => {
          if (user) {
            return Promise.reject('409~Email already registered~email');
          }
        });
      })
      .custom(data => {
        //Phone Number Already Registered
        return User.findOne({ phone: data.phone }).then(user => {
          if (user) {
            return Promise.reject('409~Phone number already registered~phone');
          }
        });
      })
      .custom(data => {
        //Not a phone number
        if (!isPhoneNumber(data.phone))
          throw new Error('422~Not a phone number~phone');
        return true;
      })
      .custom(data => {
        //Not an email address
        if (!isEmail(data.email))
          throw new Error('422~Not an email address~email');
        return true;
      })
      .custom(data => {
        if (!isStrongPassword(data.password))
          throw new Error('422~Password is weak~password');
        return true;
      })
      .custom(data => {
        if (data.password !== data.confirm)
          throw new Error("422~Passwords don't match~confirm");
        return true;
      }),
  ],
  // ========== End of Validation ========== //
  authShopController.postShopSignup
);

router.post('/login', authShopController.postShopLogin)

module.exports = router;
