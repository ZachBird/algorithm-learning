/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
  const n = nums.length;
  let cnt = 0;
  for (let i = 0; i < n; ++i) {
    if (cnt > 1) return false;
    if (nums[i] > nums[i + 1]) cnt++;
  }
  return cnt === 0 || (cnt === 1 && nums[0] >= nums[n - 1]);
};
