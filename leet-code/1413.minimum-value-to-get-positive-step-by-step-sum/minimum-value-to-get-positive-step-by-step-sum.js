/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
  // 模拟的思路
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    // 求得在遍历过程中，达到的最小值，那么保证为 1 的最小值为 1 - MinVal
    min = Math.min(sum, min);
  }
  return min < 1 ? 1 - min : 1;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));
// expect 5
