/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function (groupSizes) {
  const groupSizeMap = new Map();
  const ans = [];
  for (let i = 0; i < groupSizes.length; ++i) {
    const curItem = groupSizes[i];
    // 将 g[i] 作为 map 的键
    if (!groupSizeMap.has(curItem)) {
      if (curItem === 1) {
        ans.push([i]);
      } else {
        groupSizeMap.set(curItem, [i]);
      };
    } else {
      const curGroup = groupSizeMap.get(curItem);
      curGroup.push(i);
      if (curGroup.length === curItem) {
        ans.push(curGroup);
        groupSizeMap.set(curItem, []);
      } else {
        groupSizeMap.set(curItem, curGroup);
      }
    }
  }
  return ans;
};

console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
// expect: [[1],[0,5],[2,3,4]] 顺序无所谓
