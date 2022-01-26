const path = require('path');
const crypto = require('crypto');

const multer = require('multer');

const avatarLocation = path.join(__dirname, 'media', 'avatar');
const imageLocation = path.join(__dirname, 'media', 'images');

const avatarStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, avatarLocation);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const mediaName = crypto.randomBytes(5).toString('hex') + extension;
    callback(null, mediaName);
  },
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, imageLocation);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);

    const mediaLabel = req.params.attribute;
    const mediaName =
      crypto.randomBytes(10).toString('hex') +
      '?label=' +
      mediaLabel +
      extension;
    callback(null, mediaName);
  },
});

const filter = (req, file, callback) => {
  const extension = path.extname(file.originalname);
  const accepted = ['.jpg', '.jpeg', '.png'];

  if (accepted.includes(extension)) {
    return callback(null, true);
  } else {
    return callback(null, false);
  }
};

exports.avatarParser = multer({
  storage: avatarStorage,
  fileFilter: filter,
}).single('avatar');

exports.mediaParser = multer({ storage: storage, fileFilter: filter }).single(
  'media'
);
