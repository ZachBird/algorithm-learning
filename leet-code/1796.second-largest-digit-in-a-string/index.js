/**
 * @param {string} s
 * @return {number}
 */
const digtals = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
const secondHighest = function (s) {
  // 模拟
  const n = s.length;
  let max = -1;
  let second = -1;
  for (let i = 0; i < n; ++i) {
    if (digtals.has(s[i])) {
      const curDigit = parseInt(s[i]);
      if (curDigit > max) {
        second = max;
        max = curDigit;
      } else if (curDigit < max && curDigit > second) {
        second = curDigit;
      }
    }
  }
  return second;
};
