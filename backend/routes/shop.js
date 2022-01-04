const express = require('express');

const { body } = require('express-validator');

const auth = require('./shop/auth');
const dashboard = require('./shop/dashboard');
const validation = require('../middlewares/validation');
const authentication = require('../middlewares/authentication');

const router = express.Router();

// /shop/<authentication endpoint>
router.use(auth);

// /shop/dashboard/<dashboard endpoint>
router.use(
  '/dashboard',
  [
    body('data').custom(data => {
      if (!data.token) throw new Error('422~Data is not correct~token');
      return true;
    }),
    validation,
  ],
  [
    authentication.tokenCompiler,
    authentication.validUser,
  ],
  dashboard
);
