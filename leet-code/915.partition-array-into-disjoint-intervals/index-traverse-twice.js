/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = function (nums) {
  // 两侧遍历模拟
  // 根据题意，left 的最大值，小于等于 right 最小值的点为分割点
  const n = nums.length;
  const suffixMin = new Array(n + 1).fill(1e6 + 1);
  // 第一次遍历，倒序求后缀的最小值数组
  for (let i = n - 1; i >= 0; --i) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }
  // 第二次遍历，正序，找到分割点
  let max = 0;
  for (let i = 0; i < n; ++i) {
    max = Math.max(nums[i], max);
    if (max <= suffixMin[i + 1]) {
      return i + 1;
    }
  }
};
