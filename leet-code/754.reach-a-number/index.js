/**
 * @param {number} target
 * @return {number}
 */
const reachNumber = function (target) {
  // 数学方法
  target = Math.abs(target);
  let cur = 0;
  let sum = 0;
  // 一个负值，相当于从结果中减去了两次
  // 所以与距离终点的距离的奇偶性有关
  while (sum < target || (((sum - target) & 1) === 1)) {
    sum += ++cur;
  }
  return cur;
};
console.log(reachNumber(5));
