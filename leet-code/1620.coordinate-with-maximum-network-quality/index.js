/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
const bestCoordinate = function (towers, radius) {
  // 计算 xMax yMax
  const maxPosition = [0, 0];
  for (const tower of towers) {
    maxPosition[0] = Math.max(tower[0], maxPosition[0]);
    maxPosition[1] = Math.max(tower[1], maxPosition[1]);
  }
  const ansPosition = [0, 0];
  let maxQuality = 0;
  for (let x = 0; x <= maxPosition[0]; ++x) {
    for (let y = 0; y <= maxPosition[1]; ++y) {
      let qualities = 0;
      for (const tower of towers) {
        const curDistance = distance([x, y], [tower[0], tower[1]]);
        if (curDistance <= (radius ** 2)) {
          qualities += Math.floor(tower[2] / (1 + Math.sqrt(curDistance)));
        }
      }
      if (qualities > maxQuality) {
        maxQuality = qualities;
        ansPosition[0] = x;
        ansPosition[1] = y;
      }
    }
  }
  return ansPosition;
};

const distance = function (p1, p2) {
  return (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2;
};
