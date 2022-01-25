// Third-party libraries
const express = require('express');

// Sub-routes
const auth = require('./shop/auth');
const dashboard = require('./shop/dashboard');
const profile = require('./shop/profile');

// Middlewares
const validators = require('../validators/general');
const errorCompiler = require('../middlewares/errorCompiler');
const authentication = require('../middlewares/authentication');

const router = express.Router();

// /shop/<authentication endpoint>
// These endpoints are used for shop user CRUD actions
router.use(auth);

// /shop/dashboard/<dashboard endpoint>
// These endpoints are used for shop dashboard CRUD actions
router.use(
  '/dashboard',
  validators.hasToken,
  errorCompiler,
  authentication.tokenCompiler,
  authentication.validUser,
  dashboard
);

// /shop/profile/<profile endpoint>
// These endpoints are used for profile RU actions
// *signup and deactivate (CD) are handled in auth router
router.use(
  '/profile',
  validators.hasToken,
  errorCompiler,
  authentication.tokenCompiler,
  authentication.validUser,
  profile
);

module.exports = router;
