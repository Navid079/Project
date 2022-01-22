module.exports = (req, res, next) => {
  req.body = {...req.body}
  req.body.data = {...req.body.data}
  req.compiled = {};
  next();
}