/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
// 数学归纳，要推理的
const flipLights1 = function (n, presses) {
  if (presses === 0) {
    return 0;
  } else if (presses === 1) {
    // 4 种开关
    if (n === 1) return 2;
    if (n === 2) return 3;
    if (n <= 3) return 4;
  } else if (presses === 2) {
    if (n === 1) return 2;
    if (n === 2) return 4;
    if (n <= 3) return 7;
  } else {
    // presses <= 3
    if (n === 1) return 2;
    if (n === 2) return 4;
    if (n <= 3) return 8;
  }
};

/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
// 数学归纳，要推理的
const flipLights2 = function (n, presses) {
  if (presses === 0) return 1;
  if (n === 1) return 2;
  if (n === 2) {
    return presses === 1 ? 3 : 4;
  } else {
    if (presses === 1) {
      return 4;
    } else if (presses === 2) {
      return 7;
    } else {
      return 8;
    }
  }
};
