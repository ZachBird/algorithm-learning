/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function (s) {
  const n = s.length;
  let cnt = 0;
  let preChar = s[0];
  for (let i = 1; i < n; ++i) {
    if (preChar.toString() === s[i]) {
      cnt++;
      preChar = preChar ^ 1;
    } else {
      preChar = s[i];
    }
  }
  return Math.min(cnt, n - cnt);
};
