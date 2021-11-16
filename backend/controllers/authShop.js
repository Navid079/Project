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
