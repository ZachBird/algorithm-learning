/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function (poured, queryRow, queryGlass) {
  // 模拟 滚动数组
  let row = [poured];
  for (let i = 1; i <= queryRow; ++i) {
    const nextRow = new Array(i + 1).fill(0);
    for (let j = 0; j < i; ++j) {
      const volume = row[j];
      if (row[j] > 1) {
        // 这种保证头尾各只算一遍的遍历模式，可以记一下
        nextRow[j] += (volume - 1) / 2;
        nextRow[j + 1] += (volume - 1) / 2;
      }
    }
    row = nextRow;
  }
  // 全满溢出
  return Math.min(1, row[queryGlass]);
};
