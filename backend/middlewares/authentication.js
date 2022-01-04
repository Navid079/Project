const { readFileSync } = require('fs');
const { createSecretKey } = require('crypto');

const jose = require('jose');

const User = require('../models/User');

exports.tokenCompiler = async (req, res, next) => {
  const data = req.body.data;
  const token = data.token;

  const spki = readFileSync('publickey.cert', 'utf-8');
  const publicKey = await jose.importSPKI(spki, 'RS256');
  jose
    .jwtVerify(token, publicKey, {
      issuer: 'theProject@email.com',
      audience: `${data.devId}`,
      maxTokenAge: req.maxTokenAge || '15m',
    })
    .then(result => {
      req.body.data.compiledToken = result.payload;
      return next();
    })
    .catch(err => {
      console.log(JSON.stringify(err));
      if (err.claim === 'iat') {
        err.statusCode = 401;
        err.messages = ['Token Expired'];
        err.conflicts = ['token'];
        err.values = { token: token };
      } else {
        err.statusCode = 403;
        err.messages = ['Invalid Token'];
        err.conflicts = ['token'];
        err.values = { token: token };
      }

      next(err);
    });
};

exports.refreshCompiler = async (req, res, next) => {
  const data = req.body.data;
  const refresh = data.refresh;

  const secret = readFileSync('secret.key', 'utf-8');
  const key = await createSecretKey(secret, 'utf-8');
  jose
    .jwtDecrypt(refresh, key, {
      issuer: 'theProject@email.com',
      audience: `${data.devId}`,
    })
    .then(result => {
      req.body.data.compiledRefresh = result.payload;
      req.maxTokenAge = '30h';
      return next();
    })
    .catch(err => {
      err.statusCode = 403;
      err.messages = ['Invalid Refresh Token'];
      err.conflicts = ['refresh'];
      err.values = { token: token };
    });
};

exports.validUser = async (req, res, next) => {
  const data = req.body.data;
  const token = data.compiledToken;

  const user = await User.findById(token.userId);
  if (!user) {
    const err = new Error();
    err.statusCode = 404;
    err.messages = ['User Not Found'];
    err.conflicts = ['token'];
    err.values = { token: data.token };
    next(err);
  }
  
  req.compiled.user = user.
  next();
};
