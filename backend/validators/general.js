const { header } = require('express-validator');

exports.hasToken = header('Authorization').custom(async token => {
  if (!token) throw new Error('422~Requirement missing~token');
  return true;
});
