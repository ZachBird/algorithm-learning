/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = function (grid) {
  // 遍历矩阵
  // 对角线 i = j or i + j + 1 = n
  const n = grid.length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === j || (i + j + 1) === n) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};
