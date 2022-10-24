/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = function (nums) {
  // 模拟
  const n = nums.length;
  let leftMax = nums[0];
  let leftIdx = 0;
  let max = nums[0];
  for (let i = 1; i <= n - 2; ++i) {
    max = Math.max(max, nums[i]);
    // 如果右侧还有小于左侧最大值，说明现在分割点，不满足要求，要更新分割点
    if (nums[i] < leftMax) {
      leftMax = max;
      leftIdx = i;
    }
  }
  return leftIdx + 1;
};
