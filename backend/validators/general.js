const { body } = require('express-validator');

exports.hasToken = body('data').custom(data => {
  if (!data.token) throw new Error('422~Requirement missing~token');
  return true;
});
