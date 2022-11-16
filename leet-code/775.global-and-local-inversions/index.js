/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isIdealPermutation = function (nums) {
  const n = nums.length;
  let maxPrefix = nums[0];
  // 局部倒置一定是全局倒置，所以全局倒置包括局部倒置
  // 这样就只要找出全局，但非局部倒置，则证明二者不相等
  for (let i = 2; i < n; ++i) {
    if (nums[i] < maxPrefix) {
      return false;
    }
    maxPrefix = Math.max(maxPrefix, nums[i - 1]);
  }
  return true;
};
