// Third-party libraries
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

// Database models
<<<<<<< HEAD
const User = require("../../models/User");

//Utility functions
const phoneNormalizer = require("../../utils/phoneNormalizer");
const createJWT = require("../../utils/createJWT");
const createRefreshToken = require("../../utils/createRefreshToken");
=======
const { User, version: userVersion, migrate: userMigrate } = require('../../models/User');


//Utility functions
const phoneNormalizer = require('../../utils/phoneNormalizer');
const createJWT = require('../../utils/createJWT');
const createRefreshToken = require('../../utils/createRefreshToken');
const versionComparer = require('../../utils/versionComparer');
>>>>>>> profileEndpoint

// POST /shop/signup
// This middleware controls signing up of sellers
exports.postShopSignup = async (req, res, next) => {
  const data = req.body.data;

  // Encrypting password and sending response to client
  try {
    const hashedResult = await bcrypt.hash(data.password, 12);
    const user = new User({
      username: data.username,
      phone: phoneNormalizer(data.phone),
      email: data.email,
      password: hashedResult,
    });
    const savedUser = await user.save();
    const token = await createJWT(savedUser._id, data.devId);
    const refresh = await createRefreshToken(
      savedUser._id,
      data.devId,
      savedUser.password
    );

    res.status(201).json({
      message: "User created",
      data: {
        user: {
          username: data.username,
          email: data.email,
          phone: data.phone,
        },
        token: token,
        refresh: refresh,
      },
    });
  } catch (error) {
    next(error);
  }
};

// POST /shop/login
// This middleware controls logging in of sellers
exports.postShopLogin = async (req, res, next) => {
  const data = req.body.data;

  // Normalize phone number (as it is saved this way in database)
  if (data.userType === "phone") data.user = phoneNormalizer(data.user);

  const searchConfig = {};
  searchConfig[data.userType] = data.user;

  // Authenticating and sending reponse to client
<<<<<<< HEAD

  try {
    const user = await User.findOne(searchConfig);
    if (!user) {
      throw new Error("404~User not found~user");
    }
    const bcryptResult = await bcrypt.compare(data.password, user.password);
    if (!bcryptResult) {
      throw new Error("401~Wrong password~password");
    }
    const token = await createJWT(user._id, data.devId);
    const refresh = await createRefreshToken(
      user._id,
      data.devId,
      user.password
    );
    res.status(200).json({
      message: "Logged in successfully",
      data: {
        user: {
          username: user.username,
          email: user.email,
          phone: user.phone,
=======
  User.findOne(searchConfig)
    .then(user => {
      if (!user) {
        throw new Error('404~User not found~user');
      }
      fetchedUser = user;
      if (!versionComparer(user.schemaVersion, userVersion)) {
        userMigrate(user);
      }
      return bcrypt.compare(data.password, user.password);
    })
    .then(result => {
      if (!result) {
        throw new Error('401~Wrong password~password');
      }
      return createJWT(fetchedUser._id, data.devId);
    })
    .then(token => {
      createdToken = token;
      return createRefreshToken(
        fetchedUser._id,
        data.devId,
        fetchedUser.password
      );
    })
    .then(refresh => {
      res.status(200).json({
        message: 'Logged in successfully',
        data: {
          user: {
            username: fetchedUser.username,
            email: fetchedUser.email,
            phone: fetchedUser.phone,
          },
          token: createdToken,
          refresh: refresh,
>>>>>>> profileEndpoint
        },
        token: token,
        refresh: refresh,
      },
    });
  } catch (error) {
    next(error);
  }
};

// POST /shop/refresh
// This middleware refreshes jwt
exports.postShopRefresh = async (req, res, next) => {
  const token = req.compiled.token;
  const refresh = req.compiled.refresh;

  const createdTime = token.iat * 1000;
  const now = +new Date();

  const tokenAge = Math.floor((now - createdTime) / 60000);

  if (tokenAge < 15) {
    throw new Error("425~Token is not expired yet~token");
  }

  try {
    const user = await User.findById(refresh.usrId);
    if (!user || user.password != refresh.password) {
      throw new Error("401~Invalid refresh Token~refresh");
    }

    const token = await createJWT(user._id, data.devId);
    res.status(200).json({
      message: "Token Refreshed",
      data: {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
        token: token,
        refresh: data.refresh,
      },
    });
  } catch (error) {
    next(error);
  }
};
