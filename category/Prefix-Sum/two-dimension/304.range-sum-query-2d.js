// 二维前缀和 - 标准题型
// 在一维的基础上，扩展一下，每次 preSums[i][j] 中存的是：以 0, 0 为左上以 i, j 为右下的矩阵的和
// 画个图可得：
// preSums[i][j] = preSums[i - 1][j] + preSums[i][j - 1] - preSums[i - 1][j - 1] + nums[i][j]

// 再进一步推得，如果要用差分法求给定的一组坐标圈成的矩形
// 矩阵左上 [x1, y1] 右下 [x2, y2]
// 则以这个坐标组成的矩阵和为：
// preSums[x2][y2] - preSums[x1 - 1][y2] - preSums[x2][y1 - 1] + preSums[x1 - 1][y1 - 1] + nums[x2][y2]

// 按上述步骤，解二维前缀和同样分为两步
// 1. 构造前缀和矩阵
// 2. 按照公式计算即可

/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  // 构造前缀和矩阵
  // 注意，题中并没有说 所给矩阵为正方形矩阵，所以要取得 m * n
  const m = matrix.length;
  const n = m === 0 ? 0 : matrix[0].length;
  // 构造 (m+1) * (n+1) 矩阵
  const preSums = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      preSums[i][j] = preSums[i - 1][j] + preSums[i][j - 1] - preSums[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }
  this.preSums = preSums;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  // 同样，因为矩阵是从 1 开始构造的，所给的坐标 +1
  row1++; col1++; row2++; col2++;
  return this.preSums[row2][col2] - this.preSums[row1 - 1][col2] - this.preSums[row2][col1 - 1] + this.preSums[row1 - 1][col1 - 1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (红色矩形框的元素总和)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (绿色矩形框的元素总和)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (蓝色矩形框的元素总和)
