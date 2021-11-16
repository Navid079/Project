// Third-party libraries
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// Database models
const User = require('../models/User');

// POST /shop/signup
// This middleware controls signing up of sellers
exports.postShopSignup = (req, res, next) => {
  const data = req.body.data;

  // Checking for validation errors
  const errors = validationResult(req);
  let statusCode;
  let messages = [];
  let values = {};
  let conflicts = [];
  if (!errors.isEmpty()) {
    for (let error of errors.array()) {
      const [fetchedStatusCode, fetchedMessage, fetchedConflict] =
        error.msg.split('~');
      if (statusCode && statusCode != fetchedStatusCode) {
        break;
      }
      statusCode = fetchedStatusCode;

      messages.push(fetchedMessage);
      conflicts.push(fetchedConflict);
      values[fetchedConflict] = data[fetchedConflict];
    }

    const error = new Error();
    error.statusCode = statusCode;
    error.messages = messages;
    error.values = values;
    error.conflicts = conflicts;

    throw error;
  }

  // Encrypting password and sending response to client
  bcrypt
    .hash(data.password, 12)
    .then(hashedPassword => {
      const user = new User({ ...data });
      user.password = hashedPassword;
      return user.save();
    })
    .then(result => {
      console.log('User created');
      res.status(201).json({
        message: 'User created',
        data: {
          user: {
            name: result.name,
            email: result.email,
            phone: result.phone,
          },
        },
      });
    })
    .catch(err => next(err));
};

// POST /shop/login
// This middleware controls logging in of sellers
exports.postShopLogin = (req, res, next) => {
  const data = req.body.data;

  // Checking for validation errors
  const errors = validationResult(req);
  let statusCode;
  let messages = [];
  let values = {};
  let conflicts = [];
  if (!errors.isEmpty()) {
    for (let error of errors.array()) {
      const [fetchedStatusCode, fetchedMessage, fetchedConflict] =
        error.msg.split('~');
      if (statusCode && statusCode != fetchedStatusCode) {
        break;
      }
      statusCode = fetchedStatusCode;

      messages.push(fetchedMessage);
      conflicts.push(fetchedConflict);
      values[fetchedConflict] = data[fetchedConflict];
    }

    const error = new Error();
    error.statusCode = statusCode;
    error.messages = messages;
    error.values = values;
    error.conflicts = conflicts;

    throw error;
  }

  const searchConfig = {};
  searchConfig[data.userType] = data.user;
  let fetchedUser;

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
      res.status(200).json({
        message: 'Logged in successfully',
        data: {
          user: {
            name: fetchedUser.name,
            email: fetchedUser.email,
            phone: fetchedUser.phone,
          },
        },
      });
    })
    .catch(err => next(err));
};
