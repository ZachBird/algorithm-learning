/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumMoves = function (grid) {
  const n = grid.length;
  // 构造结果矩阵
  const dist = Array.from(
    { length: n },
    () => Array.from(
      { length: n },
      () => Array.from({ length: 2 }, () => -1)
    )
  );
  dist[0][0][0] = 0;

  const queue = [[0, 0, 0]];
  while (queue.length) {
    // x -- 尾部的纵坐标
    // y -- 尾部的横坐标
    // status -- 状态
    const [x, y, status] = queue.shift();

    if (status === 0) {
      // 水平状态
      // 向右移动
      if (y + 2 < n && grid[x][y + 2] === 0 && dist[x][y + 1][status] === -1) {
        dist[x][y + 1][status] = dist[x][y][status] + 1;
        queue.push([x, y + 1, status]);
      }
      // 向下移动
      if (
        x + 1 < n &&
        grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0 &&
        dist[x + 1][y][status] === -1
      ) {
        dist[x + 1][y][status] = dist[x][y][status] + 1;
        queue.push([x + 1, y, status]);
      }
      // 顺时针旋转
      if (
        x + 1 < n && y + 1 < n &&
        grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0 &&
        dist[x][y][1] === -1
      ) {
        dist[x][y][1] = dist[x][y][status] + 1;
        queue.push([x, y, 1]);
      }
    } else {
      // 竖直状态
      // 向下移动
      if (x + 2 < n && grid[x + 2][y] === 0 && dist[x + 1][y][status] === -1) {
        dist[x + 1][y][status] = dist[x][y][status] + 1;
        queue.push([x + 1, y, status]);
      }
      // 向右移动
      if (
        y + 1 < n &&
        grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0 &&
        dist[x][y + 1][status] === -1
      ) {
        dist[x][y + 1][status] = dist[x][y][status] + 1;
        queue.push([x, y + 1, status]);
      }
      // 逆时针旋转
      if (
        x + 1 < n && y + 1 < n &&
        grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0 &&
        dist[x][y][0] === -1
      ) {
        dist[x][y][0] = dist[x][y][status] + 1;
        queue.push([x, y, 0]);
      }
    }
  }
  return dist[n - 1][n - 2][0];
};
