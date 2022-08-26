/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  // maxA 为 最大值，maxB 为 次大值
  let maxA = 0;
  let maxB = 0;
  for (const curNum of nums) {
    if (curNum > maxA) {
      maxB = maxA;
      maxA = curNum;
    } else if (curNum > maxB) {
      maxB = curNum;
    }
  }
  return (maxA - 1) * (maxB - 1);
};

console.log(maxProduct([1, 5, 4, 5]));
// expect: 16
