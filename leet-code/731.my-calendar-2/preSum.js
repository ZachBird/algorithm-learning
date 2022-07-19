/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  // 二维前缀和 sum[i, j] = sum[i - 1, j] + sum[i, j - 1] - sum[i - 1, j - 1] + num[i, j]
  // 处理 preSum 矩阵
  const n = matrix.length;
  // 题目没说是 n * n 的矩阵！！！
  const m = n === 0 ? 0 : matrix[0].length;
  const preSum = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }
  this.preSum = preSum;
};

/**
* @param {number} row1
* @param {number} col1
* @param {number} row2
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  row1++;
  col1++;
  row2++;
  col2++;
  return this.preSum[row2][col2] - this.preSum[row1 - 1][col2] - this.preSum[row2][col1 - 1] + this.preSum[row1 - 1][col1 - 1];
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/

const numMatrix = new NumMatrix([[-4, -5]]);
