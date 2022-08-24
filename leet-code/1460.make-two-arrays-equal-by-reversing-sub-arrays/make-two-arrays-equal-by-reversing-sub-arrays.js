/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
  // 题目转化成，求两个数组元素是否相等
  const targetMap = new Map();
  target.forEach(i => targetMap.set(
    i,
    targetMap.has(i) ? targetMap.get(i) + 1 : 1
  ));
  for (const item of arr) {
    if (!targetMap.has(item)) {
      return false;
    } else {
      targetMap.set(item, targetMap.get(item) - 1);
      if (targetMap.get(item) === 0) targetMap.delete(item);
    }
  }
  return targetMap.size === 0;
};

console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
// expect: true
