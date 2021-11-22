const { readFileSync } = require('fs');

const jose = require('jose');

module.exports = async (usrId, devId) => {
  const pkcs8 = readFileSync('pkcs8.key', 'utf8');
  const key = await jose.importPKCS8(
    pkcs8,
    'ES256'
  );
  const token = await new jose.SignJWT({
    usrId: usrId,
    devId: devId,
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setExpirationTime('15m')
    .sign(key);
  return token;
};
