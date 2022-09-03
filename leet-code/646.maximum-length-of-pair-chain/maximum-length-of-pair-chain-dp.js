/**
 * @param {number[][]} pairs
 * @return {number}
 */
// DP - dp[i] 为以 i 为结尾的最长数对
const findLongestChain = function (pairs) {
  const n = pairs.length;
  // 先以 pairs[0] 排序
  const sortedPairs = pairs.sort((a, b) => a[0] - b[0]);
  // 初始化 dp 数组
  // 每一个 dp 的意义至少是以本数对构成的长度，所以初始化为 1
  const dp = new Array(n).fill(1);
  // 先找出所有的满足 pairs[i][0] > pairs[j][1] 的 j，并求出最大的 dp[j]
  // dp[i] 的值即可赋为这个最大值 + 1
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      console.log(i, j);
      if (sortedPairs[i][0] > sortedPairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    console.log('----');
  }
  return dp[n - 1];
};

findLongestChain([[1, 3], [2, 5], [7, 9], [4, 6]]);
// expect: 3
