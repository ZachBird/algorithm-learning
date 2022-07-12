/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (m, n, indices) {
  // 用计数原理优化
  // 矩阵中一个点为奇数的条件为：「当前行操作次数」与「当前列操作次数」有不同的奇偶性
  // 设：
  // [奇数操作的行数] 为 x，[偶数操作的行数] 为 m - x
  // [奇数操作的列数] 为 y，[偶数操作的列数] 为 n - y
  // 则：(乘法原理 - 分步用乘)
  // 行中为奇数的：[奇数操作的行数] * [偶数操作的列数] => x * (n - y)
  // 行中为奇数的：[奇数操作的列数] * [偶数操作的列数] => y * (m - x)
  // 结果：x * (n - y) + y * (m - x)

  // 存放行列奇偶性
  const rows = new Array(m).fill(false);
  const cols = new Array(n).fill(false);

  // 统计奇数行列
  let rowOdds = 0;
  let colOdds = 0;
  for (let i = 0; i < indices.length; ++i) {
    const curOp = indices[i];
    // 按规则改变行列奇偶性
    rows[curOp[0]] = !rows[curOp[0]];
    rowOdds += rows[curOp[0]] ? 1 : -1;
    // 简写为：（复制与判断语句合并）会有 lint 错误，不推荐
    // rowOdds += (rows[curOp[0]] = !rows[curOp[0]]) ? 1 : -1;
    cols[curOp[1]] = !cols[curOp[1]];
    colOdds += cols[curOp[1]] ? 1 : -1;
  }

  return rowOdds * (n - colOdds) + colOdds * (m - rowOdds);
};

console.log(oddCells(2, 3, [[0, 1], [1, 1]]));
