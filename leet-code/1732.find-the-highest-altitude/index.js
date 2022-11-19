/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  // 模拟
  const n = gain.length;
  let prevAl = 0;
  let maxAl = 0;
  for (let i = 1; i <= n; ++i) {
    prevAl = prevAl + gain[i - 1];
    maxAl = Math.max(prevAl, maxAl);
  }
  return maxAl;
};
