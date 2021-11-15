const User = require('../models/user');

exports.postShopSignup = (req, res, next) => {
  const data = req.body.data;

  const user = new User({ ...data });
  user
    .save()
    .then(result => {
      console.log('User created');
      console.log(result);
      res.status(201).json({
        message: 'User created',
        data: {
          user: result,
        },
      });
    })
    .catch(err => next(err));
};
