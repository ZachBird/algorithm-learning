/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  const n = code.length;
  const ans = new Array(n).fill(0);
  if (k > 0) {
    for (let i = 0; i < n; ++i) {
      let m = k;
      let val = 0;
      while (m-- > 0) val += code[(i + m + 1) % n];
      ans[i] = val;
    }
  } else if (k < 0) {
    for (let i = 0; i < n; ++i) {
      let m = k;
      let val = 0;
      while (m++ < 0) val += code[(i + n - 1 + m) % n];
      ans[i] = val;
    }
  }
  return ans;
};
