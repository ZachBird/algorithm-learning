/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
  const n = nums.length;
  let max = 0;
  for (let i = 0; i < n;) {
    let curSum = nums[i];
    while (nums[i + 1] && nums[i] < nums[i + 1]) {
      curSum += nums[i + 1];
      i++;
    }
    max = Math.max(max, curSum);
    if (curSum === nums[i]) i++;
  }
  return max;
};
