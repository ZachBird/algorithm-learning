/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
  // 模拟题
  // 分析题意
  // 只能存在 0 个 或 2 个不同字符，存在 2 个不同字符时，要分别相同才为 true
  // 其余包括不同字符位置 等于1 、大于2 均为 false
  const n = s1.length;
  let p1 = -1;
  let p2 = -1;
  let diffCount = 0;
  for (let i = 0; i < n; ++i) {
    if (s1[i] === s2[i]) continue;
    if (diffCount <= 2) {
      if (p1 === -1) p1 = i;
      else p2 = i;
    } else {
      return false;
    }
    diffCount++;
  }
  if (diffCount === 1 || diffCount > 2) return false;
  return s1[p1] === s2[p2] && s1[p2] === s2[p1];
};
