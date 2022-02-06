const path = require('path');

const fileRemover = require('../../utils/fileRemover');

const imageLocation = path.join(process.cwd(), 'media', 'images');
const avatarLocation = path.join(process.cwd(), 'media', 'avatar');

exports.patchShopProfile = async (req, res, next) => {
  const user = req.compiled.user;
  const data = req.body.data;

  const attributes = Object.keys(data);
  for (const attribute of attributes) {
    const value = data[attribute];
    if (attribute === 'token' || attribute === 'refresh') continue;
    else if (attribute === 'firstName') {
      user.name.first = value;
    } else if (attribute === 'lastName') {
      user.name.last = value;
    } else {
      user[attribute] = value;
    }
  }
  await user.save();
  const response = {
    message: 'User profile updated successfully',
    data: {
      user: {
        name: {
          first: user.name.first,
          last: user.name.last,
        },
        shopAddress: user.shopAddress,
        postalCode: user.postalCode,
        nationalCode: user.nationalCode,
        idNumber: user.idNumber,
        validated: user.validated,
      },
    },
  };

  return res.status(200).json(response);
};

exports.getShopProfile = (req, res, next) => {
  const user = req.compiled.user;

  const response = {
    message: 'User profile fetched',
    data: {
      user: {
        name: {
          first: user.name.first,
          last: user.name.last,
        },
        shopAddress: user.shopAddress,
        postalCode: user.postalCode,
        nationalCode: user.nationalCode,
        idNumber: user.idNumber,
        validated: user.validated,
      },
    },
  };

  return res.status(200).json(response);
};

exports.postShopProfileMediaParam = async (req, res, next) => {
  const user = req.compiled.user;
  user.mediaLink.push(req.file.filename);
  await user.save();

  res.status(201).json({
    message: 'Media successfully uploaded',
    data: {},
  });
};

exports.postShopProfileAvatar = async (req, res, next) => {
  const user = req.compiled.user;
  const avatar = req.file.filename;

  if (user.avatar !== 'avatar.jpg') {
    const previousAvatar = avatarLocation + user.avatar;
    fileRemover(previousAvatar);
  }

  user.avatar = avatar;

  await user.save();
  return res.status(201).json({
    message: 'avatar updated',
    data: {},
  });
};

exports.getShopProfileAvatar = (req, res, next) => {
  const user = req.compiled.user;
  const avatar = user.avatar;
  const avatarPath = path.join(avatarLocation, avatar);

  res.status(200).sendFile(avatarPath);
};

exports.getShopProfileMedia = (req, res, next) => {
  const file = req.data.file;
  const user = req.compiled.user;

  const mediaPath = path.join(imageLocation, file);

  res.status(200).sendFile(mediaPath);
};