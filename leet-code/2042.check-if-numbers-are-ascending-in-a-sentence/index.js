/**
 * @param {string} s
 * @return {boolean}
 */
const isDigit = (ch) => !isNaN(parseInt(ch));

const areNumbersAscending = function (s) {
  let prev = -1;
  let pos = 0;
  while (pos < s.length) {
    if (isDigit(s[pos])) {
      let tempStr = '';
      while (isDigit(s[pos])) {
        tempStr += s[pos];
        pos++;
      }
      if (parseInt(tempStr, 10) > prev) {
        prev = parseInt(tempStr, 10);
      } else {
        return false;
      }
    } else {
      pos++;
    }
  }
  return true;
};
