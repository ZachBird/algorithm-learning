/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumOfAverages = function (nums, k) {
  // DP + 前缀和优化
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) prefix[i] = prefix[i - 1] + nums[i - 1];
  // dp[i][j] 表示 nums 在区间 [0,i − 1] 被切分成 j 个子数组的最大平均值和
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  for (let i = 1; i <= n; ++i) {
    // 不超过 k 组的遍历写法
    for (let j = 1; j <= Math.min(i, k); ++j) {
      if (j === 1) {
        // 分成 1 组
        dp[i][j] = prefix[i] / i;
      } else {
        for (let x = 2; x <= i; ++x) {
          dp[i][j] = Math.max(dp[i][j], dp[x - 1][j - 1] + (prefix[i] - prefix[x - 1]) / (i - x + 1));
        }
      }
    }
  }
  return dp[n][k];
};
