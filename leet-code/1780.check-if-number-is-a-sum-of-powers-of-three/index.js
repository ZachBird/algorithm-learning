/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = function (n) {
  // 若干个 不同的3 的幂之和
  while (n !== 0) {
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
};
