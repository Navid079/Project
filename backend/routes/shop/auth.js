// Third-party libraries
const express = require('express');

// Controller and middlewares
const shopAuthController = require('../../controllers/shop/auth');
const errorCompiler = require('../../middlewares/errorCompiler');
const authentication = require('../../middlewares/authentication');
const generalValidators = require('../../validators/general');
const validators = require('../../validators/shop/auth');

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

// POST /shop/refresh
// This endpoint is used for refreshing jwt
router.post(
  '/refresh',
  generalValidators.hasToken,
  errorCompiler,
  authentication.tokenCompiler,
  authentication.refreshCompiler,
  shopAuthController.postShopRefresh
);

module.exports = router;
