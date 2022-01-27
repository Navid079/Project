const { body } = require('express-validator');

exports.patchProfile = body('data').custom(data => {
  const attributes = Object.keys(data);
  const acceptedAttributes = [
    'shopAddress',
    'postalCode',
    'nationalCode',
    'idNumber',
    'firstName',
    'lastName',
    'token',
    'refresh',
  ];
  for (const attribute of attributes) {
    if (!acceptedAttributes.includes(attribute)) {
      throw new Error(`422~Invalid attribute~${attribute}`);
    }
  }
  return true;
});

exports.media = body('data').custom(data => {
  if (!data.file) throw new Error('422~Requirement missing~file');
  return true;
});
