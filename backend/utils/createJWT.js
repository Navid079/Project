const { readFileSync } = require('fs');

const jose = require('jose');

module.exports = async (usrId, devId) => {
  const pkcs8 = readFileSync('pkcs8.key', 'utf-8');
  const key = await jose.importPKCS8(
    pkcs8,
    'RS256'
  );
  const token = await new jose.SignJWT({
    usrId: usrId,
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuer('theProject@email.com')
    .setIssuedAt()
    .setAudience(`${devId}`)
    .sign(key);
  return token;
};
