/**
 * @param {number} n
 * @return {number}
 */
const soupServings = function (n) {
  // 四种分配操作的 AB 值均为 25 的倍数，所以 n 可以除以 25
  n = Math.ceil(n / 25);
  // 因为即使用 dp 还是会超时，所以根据数学期望，n 很大时，A 很大概率会比 B 先分配完
  // 这样答案为 1，所以会使用该函数去试出一个值，在题目所给的允许范围 1e-6 的范围内
  // 官解给的 179
  if (n >= 179) return 1.0;

  // dp[i][j] 为表示汤 A 和汤 B 分别剩下 i 和 j 份时所求的概率值
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // 利用边界条件初始化
  dp[0][0] = 0.5;
  for (let i = 1; i <= n; ++i) {
    dp[0][i] = 1.0;
  }

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      const a = dp[Math.max(0, i - 4)][j];
      const b = dp[Math.max(0, i - 3)][Math.max(0, j - 1)];
      const c = dp[Math.max(0, i - 2)][Math.max(0, j - 2)];
      const d = dp[Math.max(0, i - 1)][Math.max(0, j - 3)];
      dp[i][j] = (a + b + c + d) / 4.0;
    }
  }

  return dp[n][n];
};
