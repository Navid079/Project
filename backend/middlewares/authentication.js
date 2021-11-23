const fs = require('fs');

const jose = require('jose');

module.exports = async (req, res, next) => {
  const data = req.body.data;
  const token = data.token;

  const spki = fs.readFileSync('publickey.cert', 'utf-8');
  const publicKey = await jose.importSPKI(spki, 'RS256');
  jose
    .jwtVerify(token, publicKey, {
      issuer: 'theProject@email.com',
      audience: `${data.devId}`,
    })
    .then(result => {
      req.body.data.token = result;
      return next();
    })
    .catch(err => {
      const error = new Error();

      if (err.claim === 'exp') {
        error.statusCode = 401;
        error.messages = ['Token Expired'];
        error.conflicts = ['token'];
        error.values = { token: token };
      } else {
        error.statusCode = 403;
        error.messages = ['Invalid Token'];
        error.conflicts = ['token'];
        error.values = { token: token };
      }

      next(error);
    });
};
