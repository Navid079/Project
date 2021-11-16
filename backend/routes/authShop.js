const express = require('express');
const { body } = require('express-validator');

const User = require('../models/User');

const authShopController = require('../controllers/authShop');

const router = express.Router();

router.post(
  '/signup',
  [
    body('data').custom(data => {
      // Email Already Registered
      if (!data.email) return true;
      return User.findOne({ email: data.email }).then(user => {
        if (user) {
          return Promise.reject('409~Email already registered~email');
        }
      });
    }),
  ],
  authShopController.postShopSignup
);

module.exports = router;
