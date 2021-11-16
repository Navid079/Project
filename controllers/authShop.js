const { validationResult } = require('express-validator');

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
      const [fetchedStatusCode, fetchedMessage, fetchedConflict] = error.msg.split('~');
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

  const user = new User({ ...data });
  user
    .save()
    .then(result => {
      console.log('User created');
      console.log(result);
      res.status(201).json({
        message: 'User created',
        data: {
          user: result,
        },
      });
    })
    .catch(err => next(err));
};
