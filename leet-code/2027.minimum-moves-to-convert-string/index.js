/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n;) {
    if (s[i] === 'X') {
      i += 3;
      ans++;
    } else {
      i++;
    }
  }
  return ans;
};
