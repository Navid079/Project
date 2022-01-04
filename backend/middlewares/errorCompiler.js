// Third-party libraries
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const data = req.body.data;

  // Checking for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors.array()[0];
    const err = new Error(error.msg);
    next(err);
  }
  next();
};
