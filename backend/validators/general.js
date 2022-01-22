const { body } = require('express-validator');

exports.hasToken = body('data').custom(async data => {
  console.log('here')
  if (!data.token) throw new Error('422~Requirement missing~token');
  return true;
});
