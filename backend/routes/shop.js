const express = require('express');

const { body } = require('express-validator');

const auth = require('./shop/auth');
const dashboard = require('./shop/dashboard');
const validators = require('../validators/general')
const validation = require('../middlewares/validation');
const authentication = require('../middlewares/authentication');

const router = express.Router();

// /shop/<authentication endpoint>
router.use(auth);

// /shop/dashboard/<dashboard endpoint>
router.use(
  '/dashboard',
  validators.hasToken,
  validation,
  authentication.tokenCompiler,
  authentication.validUser,
  dashboard
);
