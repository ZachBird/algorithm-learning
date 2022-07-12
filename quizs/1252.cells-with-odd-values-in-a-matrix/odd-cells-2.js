/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (m, n, indices) {
  // 直接模拟优化
  // 将模拟矩阵改为维护行列的操作次数
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (let i = 0; i < indices.length; ++i) {
    const curOp = indices[i];
    // 按规则做操作
    rows[curOp[0]]++;
    cols[curOp[1]]++;
  }
  // 统计
  let ans = 0;
  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < cols.length; ++j) {
      // 对应位置相加的次数
      ((rows[i] + cols[j]) & 1) === 1 && ans++;
    }
  }
  return ans;
};

console.log(oddCells(2, 3, [[0, 1], [1, 1]]));
