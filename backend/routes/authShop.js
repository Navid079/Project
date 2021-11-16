const express = require('express');
const { body } = require('express-validator');

const User = require('../models/User');

const isPhoneNumber = require('../utils/isPhoneNumber');

const authShopController = require('../controllers/authShop');

const router = express.Router();

router.post(
  '/signup',
  [
    body('data')
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
      }),
  ],
  authShopController.postShopSignup
);

module.exports = router;
