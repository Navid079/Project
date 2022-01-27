const { readFileSync } = require('fs');
const { createSecretKey } = require('crypto');

const jose = require('jose');

const {
  User,
  version: userVersion,
  migrate: userMigrate,
} = require('../models/User');
const versionComparer = require('../utils/versionComparer');

exports.tokenCompiler = async (req, res, next) => {
  const data = req.headers.authorization;
  const [token, devId, refresh] = data.split('~');
  req.body.data.token = token;
  req.body.data.refresh = refresh;
  const spki = readFileSync('publickey.cert', 'utf-8');
  const publicKey = await jose.importSPKI(spki, 'RS256');
  try {
    const varificationResult = await jose.jwtVerify(token, publicKey, {
      issuer: 'theProject@email.com',
      audience: `${devId}`,
      maxTokenAge: req.maxTokenAge || '15h',
    });
    req.compiled.token = varificationResult.payload;
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
  const data = req.headers.authorization;
  const [token, devId, refresh] = data.split('~');

  const secret = readFileSync('secret.key', 'utf-8');
  const key = await createSecretKey(secret, 'utf-8');
  try {
    const decyptionResult = await jose.jwtDecrypt(refresh, key, {
      issuer: 'theProject@email.com',
      audience: `${devId}`,
    });
    req.compiled.refresh = decyptionResult.payload;
    req.maxTokenAge = '30h';
    return next();
  } catch (err) {
    return next(new Error('403~Invalid refresh token~refresh'));
  }
};

exports.validUser = async (req, res, next) => {
  const token = req.compiled.token;

  const user = await User.findById(token.usrId).exec();
  if (!user) {
    return next(new Error('404~User not found~userId'));
  }

  req.compiled.user = user;

  if (!versionComparer(user.schemaVersion, userVersion)) {
    userMigrate(user);
  }

  return next();
};
