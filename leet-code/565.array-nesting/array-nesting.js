/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function (nums) {
  // 知识点：必定成环的有向图，题意为求环的最大长度
  // 思路为模拟，去遍历找最长的环，为了避免节点重复使用，路过的节点置为 -1
  let ans = 0;
  for (let i = 0; i < nums.length; ++i) {
    let curRingLength = 0;
    let itemIdx = i;
    while (nums[itemIdx] !== -1) {
      const temp = itemIdx;
      itemIdx = nums[itemIdx];
      nums[temp] = -1;
      curRingLength++;
    }
    ans = Math.max(ans, curRingLength);
  }
  return ans;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
// expect: 4
