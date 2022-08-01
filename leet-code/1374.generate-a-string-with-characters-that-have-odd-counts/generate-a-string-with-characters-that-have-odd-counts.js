/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function (n) {
  if ((n & 1) === 1) {
    return 'a'.repeat(n);
  } else {
    return 'a'.repeat(n - 1) + 'b';
  }
};
