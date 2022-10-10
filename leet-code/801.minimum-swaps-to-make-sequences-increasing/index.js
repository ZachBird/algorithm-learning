/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 状态机 DP
const minSwap = function (nums1, nums2) {
  // 最小子问题 处理到 i 时的最小交换次数
  // 因为这个子问题由两种状态决定，即 交换 和 不交换，所以是个状态机 dp （大概
  // 题解中内容：
  // 定义 f[i][j] 为考虑下标范围为 [0, i] 的元素，且位置 i 的交换状态为 j 时（其中 j = 0 为不交换，j = 1 为交换）两数组满足严格递增的最小交换次数。
  const n = nums1.length;
  // 因为要求最小值，交换次数小于等于 n，初始化为 n 即可
  const dp = new Array(n).fill(0).map(() => [n, n]);
  dp[0][0] = 0;
  dp[0][1] = 1;
  // 状态转移方程参见：https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/solution/by-ac_oier-fjhp
  for (let i = 1; i < n; ++i) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      // 要么 i 和 i - 1 位置同时交换，要么就不交换
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1] + 1;
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      // 要么前一个位置交换，要么当前位置交换， dp 中存最小值
      dp[i][0] = Math.min(dp[i][0], dp[i - 1][1]);
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][0] + 1);
    }
  }
  return Math.min(...dp[n - 1]);
};
