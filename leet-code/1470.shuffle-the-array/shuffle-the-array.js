/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  let p1 = 0;
  let p2 = n;
  const ans = [];
  while (p1 < n) {
    ans.push(nums[p1++], nums[p2++]);
  }
  return ans;
};

shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
// expect: [1,4,2,3,3,2,4,1]
