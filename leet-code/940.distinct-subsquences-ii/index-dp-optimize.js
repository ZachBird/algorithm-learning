/**
 * @param {string} s
 * @return {number}
 */
// const distinctSubseqII = function (s) {
//   // 序列 DP (?)
//   // 最小子问题 dp[i][j] : 前 i 个元素，以 j 结尾的子序列个数
//   // 题解为 dp[i][j], 其中 i => [1 - n], j => [a - z] 的和
//   // 其中初始状态 dp[1][j] = 0, j => [0 - 25]
//   const MOD = 10 ** 9 + 7;
//   const n = s.length;
//   const dp = new Array(n + 1).fill(0).map(() => new Array(26).fill(0));
//   // 从 1 开始
//   // dp[i][j], 其中 i => [1 - n], j => [a - z] 的和
//   // 此处的状态转移的意义要清楚：以 j 结尾的子序列个数
//   for (let i = 1; i <= n; ++i) {
//     const curTail = s[i - 1];
//     // 因为 s 中的元素会有重复，所以状态转移要分情况考虑
//     for (let j = 0; j < 26; ++j) {
//       const curChar = String.fromCharCode(j + 97);
//       if (curChar !== curTail) {
//         dp[i][j] = dp[i - 1][j];
//       } else {
//         let updateDP = 1;
//         for (let k = 0; k < 26; ++k) updateDP = (updateDP + dp[i - 1][k]) % MOD;
//         dp[i][j] = updateDP;
//       }
//     }
//   }
//   // MARK: 优化点
//   // 因为最后一步要遍历，
//   // 所以其实一个 26 个元素的数组保存一个以对应字母为结尾的数组
//   // 子序列数量就足矣计算重复情况的状态转移了
//   let ans = 0;
//   for (let i = 0; i < 26; ++i) ans += dp[n][i];
//   return ans % MOD;
// };

/**
 * @param {string} s
 * @return {number}
 */
const distinctSubseqII = function (s) {
  const MOD = 10 ** 9 + 7;
  const n = s.length;
  const dp = new Array(26).fill(0);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    const curCharCode = s[i].charCodeAt() - 'a'.charCodeAt();
    const curSubSeqCount = dp[curCharCode];
    dp[curCharCode] = (ans + 1) % MOD;
    ans = (ans + dp[curCharCode] - curSubSeqCount + MOD) % MOD;
  }
  return ans;
};
