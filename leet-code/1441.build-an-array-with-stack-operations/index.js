/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
  // 模拟题, 甚至没用 n, 是因为数据范围限制, 算偷鸡
  const ans = [];
  let cur = 1;
  for (const t of target) {
    while (t !== cur) {
      ans.push('Push', 'Pop');
      cur++;
    }
    ans.push('Push');
    cur++;
  }
  return ans;
};
