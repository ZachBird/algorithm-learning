/**
 * @param {string} s
 * @return {number}
 */
const distinctSubseqII = function (s) {
  // 序列 DP (?)
  // 最小子问题 dp[i][j] : 前 i 个元素，以 j 结尾的子序列个数
  // 题解为 dp[i][j], 其中 i => [1 - n], j => [a - z] 的和
  // 其中初始状态 dp[1][j] = 0, j => [0 - 25]
  const MOD = 10 ** 9 + 7;
  const n = s.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(26).fill(0));
  // 从 1 开始
  // dp[i][j], 其中 i => [1 - n], j => [a - z] 的和
  // 此处的状态转移的意义要清楚：以 j 结尾的子序列个数
  for (let i = 1; i <= n; ++i) {
    const curTail = s[i - 1];
    // 因为 s 中的元素会有重复，所以状态转移要分情况考虑
    for (let j = 0; j < 26; ++j) {
      const curChar = String.fromCharCode(j + 97);
      if (curChar !== curTail) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let updateDP = 1;
        for (let k = 0; k < 26; ++k) updateDP = (updateDP + dp[i - 1][k]) % MOD;
        dp[i][j] = updateDP;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < 26; ++i) ans += dp[n][i];
  return ans % MOD;
};
