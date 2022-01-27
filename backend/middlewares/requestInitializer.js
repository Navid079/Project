module.exports = (req, res, next) => {
  console.log(req.method + " " + req.url);
  req.body = {...req.body}
  req.body.data = {...req.body.data}
  req.compiled = {};
  next();
}