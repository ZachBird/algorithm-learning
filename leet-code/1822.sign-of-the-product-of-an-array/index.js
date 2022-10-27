/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  let sing = true;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) sing = !sing;
  }
  return sing ? 1 : -1;
};
