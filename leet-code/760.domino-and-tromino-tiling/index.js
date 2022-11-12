/**
 * @param {number} n
 * @return {number}
 */
const MOD = 1e9 + 7;
const numTilings = function (n) {
  // dp
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0));
  // 状态为第 i 列的格子状态
  // 全空 - dp[i][0]
  // 上空 - dp[i][1]
  // 下空 - dp[i][2]
  // 全满 - dp[i][3]
  // 转移方程想一下 dp[i - 1] 怎么样才能拼成上述四种状态
  // 因为 n = 1 为 1，全满状态
  dp[0][3] = 1;
  for (let i = 1; i <= n; ++i) {
    dp[i][0] = (dp[i - 1][3]) % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % MOD;
  }
  return dp[n][3];
};
