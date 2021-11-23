// Third-party libraries
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// Database models
const User = require('../models/User');

//Utility functions
const phoneNormalizer = require('../utils/phoneNormalizer');
const createJWT = require('../utils/createJWT');
const createRefreshToken = require('../utils/createRefreshToken');

// POST /shop/signup
// This middleware controls signing up of sellers
exports.postShopSignup = (req, res, next) => {
  const data = req.body.data;

  let createdUser;
  let createdToken;

  // Encrypting password and sending response to client
  bcrypt
    .hash(data.password, 12)
    .then(hashedPassword => {
      const user = new User({
        name: data.name,
        phone: phoneNormalizer(data.phone),
        email: data.email,
        password: hashedPassword,
      });
      return user.save();
    })
    .then(result => {
      createdUser = result;
      return createJWT(result._id, data.devId);
    })
    .then(token => {
      createdToken = token;
      return createRefreshToken(
        createdUser._id,
        data.devId,
        createdUser.password
      );
    })
    .then(refresh => {
      res.status(201).json({
        message: 'User created',
        data: {
          user: {
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
          token: createdToken,
          refresh: refresh,
        },
      });
    })
    .catch(err => next(err));
};

// POST /shop/login
// This middleware controls logging in of sellers
exports.postShopLogin = (req, res, next) => {
  const data = req.body.data;

  // Normalize phone number (as it is saved this way in database)
  if (data.userType === 'phone') data.user = phoneNormalizer(data.user);

  const searchConfig = {};
  searchConfig[data.userType] = data.user;
  let fetchedUser;
  let createdToken;

  // Authenticating and sending reponse to client
  User.findOne(searchConfig)
    .then(user => {
      if (!user) {
        const error = new Error();
        error.statusCode = 404;
        error.messages = ['User not found'];
        error.conflicts = ['user'];
        error.values = { user: data.user };

        throw error;
      }
      fetchedUser = user;
      return bcrypt.compare(data.password, user.password);
    })
    .then(result => {
      if (!result) {
        const error = new Error();
        error.statusCode = 401;
        error.messages = ['Wrong password'];
        error.conflicts = ['password'];
        error.values = { password: data.password };

        throw error;
      }
      return createJWT(fetchedUser._id, data.devId);
    })
    .then(token => {
      createdToken = token;
      return createRefreshToken(
        fetchedUser._id,
        data.devId,
        fetchedUser.password
      );
    })
    .then(refresh => {
      res.status(200).json({
        message: 'Logged in successfully',
        data: {
          user: {
            name: fetchedUser.name,
            email: fetchedUser.email,
            phone: fetchedUser.phone,
          },
          token: createdToken,
          refresh: refresh,
        },
      });
    })
    .catch(err => next(err));
};
