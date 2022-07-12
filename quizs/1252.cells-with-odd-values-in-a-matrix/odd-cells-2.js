/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (m, n, indices) {
  // 按提议要求暴力求解
  // 构建 m * n 矩阵
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < indices.length; ++i) {
    const curOp = indices[i];
    // 矩阵上按规则做操作
    const rOp = curOp[0];
    const cOp = curOp[1];
    for (let j = 0; j < matrix.length; ++j) {
      const curRow = matrix[j];
      for (let k = 0; k < curRow.length; ++k) {
        if (j === rOp) {
          matrix[j][k] += 1;
        }
        if (k === cOp) {
          matrix[j][k] += 1;
        }
      }
    }
  }
  let ans = 0;
  for (let j = 0; j < matrix.length; ++j) {
    const curRow = matrix[j];
    for (let k = 0; k < curRow.length; ++k) {
      (matrix[j][k] & 1) === 1 && ans++;
    }
  }
  return ans;
};

console.log(oddCells(2, 3, [[0, 1]]));
