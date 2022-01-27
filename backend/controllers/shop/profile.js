const path = require('path');

const fileRemover = require('../../utils/fileRemover');

const avatarLocation = path.join(__dirname, 'media', 'avatar');

exports.patchShopProfile = async (req, res, next) => {
  const user = req.compiled.user;
  const data = req.body.data;

  for (const [attribute, value] in Object.entries(data)) {
    user[attribute] = value;
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

exports.postShopProfileMediaParam = (req, res, next) => {
  const user = req.compiled.user;
  user.mediaLink.push(req.file.filename);
  await user.save();

  res.status(201).json({
    message: 'Media successfully uploaded',
    data: {},
  });
};

exports.postShopProfileAvatar = (req, res, next) => {
  const user = req.compiled.user;
  const avatar = req.file.filename;

  const previousAvatar = avatarLocation + user.avatar;
  fileRemover(previousAvatar);

  user.avatar = avatar;

  await user.save();
  return res.status(201).json({
    message: 'avatar updated',
    data: {},
  });
};

exports.getShopProfileAvatar = (req, res, next) => {
  // TODO: complete and test this endpoint
};

exports.getShopProfileMedia = (req, res, next) => {
  // TODO: complete and test this endpoint
};
