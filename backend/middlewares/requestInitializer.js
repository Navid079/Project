module.exports = (req, res, next) => {
  req.compiled = {};
  next();
}