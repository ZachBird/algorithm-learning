// const n = 5;
// const matrix = new Array(n).fill(0).map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));
// console.log(matrix);
// const dps = new Array(n * 2 - 1).fill(0).map(() => matrix);
// // console.log(dps);
// // const f = new Array(n * 2 - 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE)));
// // console.log(f);

/**
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = function (grid) {
  // 构建 dp 矩阵 (length * 2 - 1) * n * n
  const n = grid.length;
  // tips：数组项为 empty 迭代器不遍历
  // 坑：不能这么写，应该有引用传值问题
  // const matrix = new Array(n).fill(0).map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));
  // const dps = new Array(n * 2 - 1).fill(0).map(() => matrix);
  const dps = new Array(n * 2 - 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER)));
  console.log(dps);
  // 初始化矩阵
  dps[0][0][0] = grid[0][0];
  // 从第一步开始，为了便于理解，毕竟走路哪有从第 0 步走起的
  for (let step = 1; step < n * 2 - 1; ++step) {
    for (let x1 = Math.max(step - n + 1, 0); x1 <= Math.min(step, n - 1); ++x1) {
      const y1 = step - x1;
      // 遇到障碍
      if (grid[x1][y1] === -1) {
        continue;
      }
      for (let x2 = x1; x2 <= Math.min(step, n - 1); ++x2) {
        const y2 = step - x2;
        if (grid[x2][y2] === -1) {
          continue;
        }
        const prevStep = step - 1;
        // 向 dps 中填值, x1, x2 分四种情况
        // 1. 都向右走
        let temp = dps[prevStep][x1][x2];
        if (x1 > 0) { // x1 > 0 意味着 x1 向右的已经走完了，也就是 x1 向下探索了
          // 2. x1 向下，x2 向右
          temp = Math.max(temp, dps[prevStep][x1 - 1][x2]);
        }
        if (x2 > 0) {
          // 3. x1 向右，x2 向下
          temp = Math.max(temp, dps[prevStep][x1][x2 - 1]);
        }
        if (x1 > 0 && x2 > 0) {
          // 4. x1, x2 都向下
          temp = Math.max(temp, dps[prevStep][x1 - 1][x2 - 1]);
        }
        // 从 grid 里将这一步的樱桃数目加进去
        temp += grid[x1][y1];
        if (x1 !== x2) {
          // x1 和 x2 不能重复
          temp += grid[x2][y2];
        }
        // 结果返给 dps 数组，因为是求最大值
        dps[step][x1][x2] = temp;
      }
    }
  }
  console.log(dps);
  // n * 2 - 2 是因为最长走 n * 2 - 1 步，然后从第一步开始走，所以数组索引再 -1
  return Math.max(dps[n * 2 - 2][n - 1][n - 1], 0);
};

console.log(cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]]));
