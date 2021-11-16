const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.postShopSignup = (req, res, next) => {
  const data = req.body.data;

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
