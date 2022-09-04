/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function (mat) {
  // 遍历统计行列中 1 的数量
  const rows = new Array(mat.length).fill(0);
  const cols = new Array(mat[0].length).fill(0);
  for (let i = 0; i < mat.length; i++) {
    const curRow = mat[i];
    for (let j = 0; j < curRow.length; j++) {
      if (mat[i][j] === 1) {
        rows[i] += 1;
        cols[j] += 1;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    const curRow = mat[i];
    for (let j = 0; j < curRow.length; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        ans += 1;
      }
    }
  }
  console.log(ans);
};
numSpecial([
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
]);
