/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
  // 哈希表
  const numsMap = new Map();
  for (let i = 0; i < nums.length; ++i) {
    const curNum = nums[i];
    if (numsMap.has(curNum)) {
      numsMap.set(curNum, numsMap.get(curNum) + 1);
    } else {
      numsMap.set(curNum, 1);
    }
  }
  nums.sort((a, b) =>
    numsMap.get(a) !== numsMap.get(b)
      ? numsMap.get(a) - numsMap.get(b)
      : b - a);
  return nums;
};
