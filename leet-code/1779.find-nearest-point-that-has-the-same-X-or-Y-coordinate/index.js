/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function (x, y, points) {
  // 模拟题
  const n = points.length;
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;
  for (let i = 0; i < n; ++i) {
    const point = points[i];
    if (point[0] === x || point[1] === y) {
      const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (distance < min) {
        min = Math.min(min, distance);
        minIdx = i;
      }
    }
  }
  return minIdx;
};
