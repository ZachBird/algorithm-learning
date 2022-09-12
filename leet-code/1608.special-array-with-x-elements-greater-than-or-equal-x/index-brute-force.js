/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解
const specialArray = function (nums) {
  if (nums.length === 1 && nums[0] === 0) return -1;
  let ans = 0;
  while (ans <= nums.length) {
    let ansCount = 0;
    nums.forEach(num => num >= ans && ansCount++);
    if (ansCount === ans) break;
    ans++;
  }
  return ans <= nums.length ? ans : -1;
};
