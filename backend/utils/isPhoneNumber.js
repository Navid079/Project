module.exports = number => {
  const re = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
  return re.test(number);
};
