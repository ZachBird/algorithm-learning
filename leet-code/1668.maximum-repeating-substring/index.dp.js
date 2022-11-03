/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
// DP dp[i] 为以 i 为结尾的，word 重复次数
// "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
// "aaaba"
const maxRepeating = function (sequence, word) {
  const n = sequence.length;
  const m = word.length;
  const dp = new Array(n).fill(0);
  // 因为前面 dp 数组也均为空
  // 如果不是 m - 1 少计算了第一个 word
  for (let i = m - 1; i < n; ++i) {
    let valid = true;
    for (let j = 0; j < m; ++j) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      dp[i] = (i === m - 1 ? 0 : dp[i - m]) + 1;
    }
  }
  let ans = 0;
  dp.forEach(i => {
    ans = Math.max(ans, i);
  });
  return ans;
};
