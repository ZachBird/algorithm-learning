/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function (nums, left, right) {
  // 一次遍历
  const n = nums.length;
  let lastGTRight = -1;
  let lastInRange = -1;

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] > right) {
      lastGTRight = i;
    } else {
      if (nums[i] < left) {
        if (lastInRange > lastGTRight) ans += lastInRange - lastGTRight;
      } else {
        lastInRange = i;
        ans += lastInRange - lastGTRight;
      }
    }
  }
  return ans;
};
