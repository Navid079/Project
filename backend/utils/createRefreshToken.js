const { createSecretKey } = require('crypto');
const { readFileSync } = require('fs');

const jose = require('jose');

module.exports = async (usrId, devId, password) => {
  const secret = readFileSync('secret.key', 'utf-8');
  const key = createSecretKey(secret, 'utf-8');

  const date = new Date();
  date.setHours(24, 0, 0, 0);

  const token = await new jose.EncryptJWT({
    usrId: usrId,
    password: password,
  })
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setExpirationTime(+date)
    .setIssuer('theProject@email.com')
    .setAudience(`${devId}`)
    .encrypt(key);
  return token;
};
