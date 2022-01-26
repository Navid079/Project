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
  };

  return res.status(200).json(response);
};

exports.getShopProfile = (req, res, next) => {
  const user = req.compiled.user;

  const response = {
    message: 'User profile fetched',
    data: {
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
  };

  return res.status(200).json(response);
};

exports.postShopProfileMediaParam = (req, res, next) => {
  // TODO: complete and test this endpoint
};

exports.getShopProfileAvatar = (req, res, next) => {
  // TODO: complete and test this endpoint
};

exports.getShopProfileMedia = (req, res, next) => {
  // TODO: complete and test this endpoint
};
