/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
const MOD = 10 ** 9 + 7;
const dieSimulator = function (n, rollMax) {
  const dp = Array.from(
    { length: 2 },
    () => Array.from(
      { length: 6 },
      () => Array.from(
        { length: 16 },
        () => 0
      )
    )
  );

  // 状态初始化 - 第一次掷骰子，连续 1 次掷出 j 的数量都为 1
  for (let i = 0; i < 6; ++i) {
    dp[1][i][1] = 1;
  }
  // 状态转移方程

  for (let i = 2; i <= n; ++i) {
    const t = i & 1;
    // 空间优化，每次都要重置之前的状态
    for (let j = 0; j < 6; ++j) {
      dp[t][j].fill(0);
    }

    for (let j = 0; j < 6; ++j) {
      for (let k = 1; k <= rollMax[j]; ++k) {
        // 枚举本次投掷状态
        for (let cur = 0; cur < 6; ++cur) {
          if (cur !== j) {
            dp[t][cur][1] = (dp[t][cur][1] + dp[t ^ 1][j][k]) % MOD;
          } else if (k + 1 <= rollMax[j]) {
            dp[t][cur][k + 1] = (dp[t][cur][k + 1] + dp[t ^ 1][j][k]) % MOD;
          }
        }
      }
    }
  }

  let ans = 0;
  for (let j = 0; j < 6; ++j) {
    for (let k = 1; k <= rollMax[j]; ++k) {
      ans = (ans + dp[n & 1][j][k]) % MOD;
    }
  }

  return ans;
};
