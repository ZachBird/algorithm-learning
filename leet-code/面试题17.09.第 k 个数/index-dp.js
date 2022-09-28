/**
 * @param {number} k
 * @return {number}
 */
const getKthMagicNumber = function (k) {
  const dp = new Array(k + 1).fill(0);
  dp[1] = 1;
  // 分别代表 3,5,7 各因子的因数
  let count3 = 1;
  let count5 = 1;
  let count7 = 1;
  for (let i = 2; i <= k; i++) {
    const num3 = dp[count3] * 3;
    const num5 = dp[count5] * 5;
    const num7 = dp[count7] * 7;
    dp[i] = Math.min(Math.min(num3, num5), num7);
    if (dp[i] === num3) count3++;
    if (dp[i] === num5) count5++;
    if (dp[i] === num7) count7++;
  }
  return dp[k];
};
