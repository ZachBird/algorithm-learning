/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
const orderOfLargestPlusSign = function (n, mines) {
  // 预处理矩阵
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(1));
  for (const mine of mines) {
    dp[mine[0] + 1][mine[1] + 1] = 0;
  }
  const prefixUp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const prefixLeft = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const prefixDown = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const prefixRight = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (dp[i][j] === 1) {
        prefixUp[i][j] = prefixUp[i - 1][j] + 1;
        prefixLeft[i][j] = prefixLeft[i][j - 1] + 1;
      }
      if (dp[n + 1 - i][n + 1 - j] === 1) {
        prefixDown[n + 1 - i][n + 1 - j] = prefixDown[n + 2 - i][n + 1 - j] + 1;
        prefixRight[n + 1 - i][n + 1 - j] = prefixRight[n + 1 - i][n + 2 - j] + 1;
      }
    }
  }
  console.log(prefixDown);
  // 取最小前缀的最大值
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      const curRowMin = Math.min(prefixLeft[i][j], prefixRight[i][j]);
      const curColMin = Math.min(prefixUp[i][j], prefixDown[i][j]);
      ans = Math.max(ans, Math.min(curRowMin, curColMin));
    }
  }
  return ans;
};
