// 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。

// 每次「迁移」操作将会引发下述活动：

// 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
// 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
// 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
// 请你返回 k 次迁移操作后最终得到的 二维网格。

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function (grid, k) {
  // 构造题
  // https://leetcode.cn/problems/shift-2d-grid/solution/by-ac_oier-1blt/

  // 构造矩阵
  const m = grid.length;
  const n = m === 0 ? 0 : grid[0].length;
  const ansMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 与官方题解不一样的是，该思路是以 O(1) 的复杂度「按列」处理结果矩阵
  // 最终结果中列坐标变为 (j + k) % n ，因为每移动一次，列数 +1，所以操作数对列数取模，得到该列最终的 j
  // 因为规则 3，所以每列的第一行元素也会在移动过程中变化，每次被移到第一列，向下移一格，所以是 (经过第一列的次数 % m) 得到最终的 i
  // 其中，经过第一列的次数，为 (i + k) / n
  for (let j = 0; j < n; ++j) {
    // 按列处理构造后的数组，所以还要按行去给赋值
    const finalCol = (j + k) % n;
    let finalRow = Math.floor((j + k) / n) % m;
    // console.log('finalCol', finalCol, finalRow);
    for (let i = 0; i < m; ++i) {
      // console.log('finalRow', finalRow, finalRow % m, m);
      ansMatrix[(finalRow % m)][finalCol] = grid[i][j];
      finalRow++;
    }
  }
  return ansMatrix;
};

// 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// 输出：[[9,1,2],[3,4,5],[6,7,8]]
const result1 = shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1);
console.log(result1);

// 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// const result2 = shiftGrid([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4);
// console.log(result2);
