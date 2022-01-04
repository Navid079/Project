const { readFileSync } = require('fs');
const { createSecretKey } = require('crypto');

const jose = require('jose');

const User = require('../models/User');

exports.tokenCompiler = async (req, res, next) => {
  const data = req.body.data;
  const token = data.token;

  const spki = readFileSync('publickey.cert', 'utf-8');
  const publicKey = await jose.importSPKI(spki, 'RS256');
  try {
    const varificationResult = await jose.jwtVerify(token, publicKey, {
      issuer: 'theProject@email.com',
      audience: `${data.devId}`,
      maxTokenAge: req.maxTokenAge || '15m',
    });
    req.body.data.compiledToken = varificationResult.payload;
    return next();
  } catch (err) {
    if (err.claim === 'iat') {
      return next(new Error('401~Token Expired~token'));
    } else {
      return next(new Error('403~Invalid token~token'));
    }
  }
};

exports.refreshCompiler = async (req, res, next) => {
  const data = req.body.data;
  const refresh = data.refresh;

  const secret = readFileSync('secret.key', 'utf-8');
  const key = await createSecretKey(secret, 'utf-8');
  try {
    const decyptionResult = await jose.jwtDecrypt(refresh, key, {
      issuer: 'theProject@email.com',
      audience: `${data.devId}`,
    });
    req.body.data.compiledRefresh = decyptionResult.payload;
    req.maxTokenAge = '30h';
    return next();
  } catch (err) {
    return next(new Error('403~Invalid refresh token~refresh'));
  }
};

exports.validUser = async (req, res, next) => {
  const data = req.body.data;
  const token = data.compiledToken;

  const user = await User.findById(token.userId);
  if (!user) {
    return next(new Error('404~User not found~userId'));
  }

  req.compiled.user = user;
  return next();
};
