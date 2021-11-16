module.exports = number => {
  if (number[0] == '0' && number[1] == '0') {
    if (number.length != 14) return false;
    if (number[2] != '9' && number[3] != '8' && number[4] !== '9') return false;
  } else if (number[0] == '0') {
    if (number.length != 11) return false;
    if (number[1] != '9') return false;
  } else if (number[0] == '+') {
    if (number.length != 13) return false;
    if (number[1] != '9' && number[2] != '8' && number[3] != '9') return false;
  } else {
    if (number.length != 10) return false;
    if (number[0] != '9') return false;
  }
};
