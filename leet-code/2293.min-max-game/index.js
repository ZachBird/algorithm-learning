/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
  while (nums.length !== 1) {
    const newNums = new Array(nums.length / 2).fill(0);
    nums = newNums.map((_, idx) => {
      // ! 比较运算符优先级比位运算优先级高
      if ((idx & 1) === 0) {
        return Math.min(nums[2 * idx], nums[2 * idx + 1]);
      } else {
        return Math.max(nums[2 * idx], nums[2 * idx + 1]);
      }
    });
  }
  return nums[0];
};
