/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isFlipedString = function (s1, s2) {
  const n = s1.length;
  const m = s1.length;
  if (n !== m) return false;
  if (n === 0) return true;
  for (let i = 0; i < n; ++i) {
    let ans = true;
    for (let j = 0; j < n; ++j) {
      if (s1[(i + j) % n] !== s2[j]) {
        ans = false;
        break;
      }
    }
    if (ans) return true;
  }
  return false;
};
