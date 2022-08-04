/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function (nums) {
  // 贪心解法
  // 重要的是反证
  let idx = nums.length - 1;
  let sum = nums.reduce((sum, num) => (sum += num));
  let subSum = 0;
  const orderedNums = nums.sort((a, b) => a - b);
  const ans = [];
  // 小于就停止的话，那会有相等的情况，所以相等时还要再操作一次
  while (subSum <= sum) {
    sum -= orderedNums[idx];
    subSum += orderedNums[idx];
    ans.push(orderedNums[idx]);
    idx--;
  }
  return ans;
};

minSubsequence([4, 4, 7, 6, 7]);
// expect: [7,7,6]
