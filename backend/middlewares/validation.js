// Third-party libraries
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
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
  next();
};
