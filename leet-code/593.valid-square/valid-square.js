/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function (p1, p2, p3, p4) {
  const lenSet = new Set();
  const pointArray = [p1, p2, p3, p4];
  for (let i = 0; i < 4; ++i) {
    for (let j = i + 1; j < 4; ++j) {
      const curLength = calcLength(pointArray[i], pointArray[j]);
      // 排除重合点
      if (curLength === 0) return false;
      lenSet.add(calcLength(pointArray[i], pointArray[j]));
    }
  }
  return lenSet.size <= 2;
};

const calcLength = function (a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return (x2 - x1) ** 2 + (y2 - y1) ** 2;
};

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));
// except: true

console.log(validSquare([0, 0], [1, 1], [0, 0], [0, 0]));
// except: false
