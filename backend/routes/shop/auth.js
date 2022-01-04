// Third-party libraries
const express = require('express');
const { body } = require('express-validator');

// Database models
const User = require('../../models/User');

// Controller and middlewares
const shopAuthController = require('../../controllers/shop/auth');
const errorCompiler = require('../../middlewares/errorCompiler');
const authentication = require('../../middlewares/authentication');
const validators = require('../../validators/shop/auth');

// Utility functions
const isPhoneNumber = require('../../utils/isPhoneNumber');
const isEmail = require('../../utils/isEmail');
const isStrongPassword = require('../../utils/isStrongPassword');

const router = express.Router();

// POST /shop/signup
// This endpoint is used for signing up of sellers
router.post(
  '/signup',
  validators.signup,
  errorCompiler,
  shopAuthController.postShopSignup
);

// POST /shop/login
// This endpoint is used for logging in of sellers
router.post(
  '/login',
  validators.login,
  errorCompiler,
  shopAuthController.postShopLogin
);

router.post(
  '/refresh',
  validators.refresh,
  errorCompiler,
  authentication.tokenCompiler,
  authentication.refreshCompiler,
  shopAuthController.postShopRefresh
);

module.exports = router;
