/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  const n = nums.length;
  // 转换思维，是从 nums 中移除一个子数组，子数组的和为 x - Sum(nums)
  let target = -x;
  for (const num of nums) target += num;
  if (target < x) return -1;

  let left = 0;
  let sum = 0;
  let ans = -1;
  for (let right = 0; right < n; ++right) {
    sum += nums[right];

    while (sum > target) sum -= nums[left++];

    if (sum === target) ans = Math.max(ans, right - left + 1);
  }

  return ans < 0 ? -1 : n - ans;
};
