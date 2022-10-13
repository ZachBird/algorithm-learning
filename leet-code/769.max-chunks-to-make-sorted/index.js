/**
 * @param {number[]} arr
 * @return {number}
 */
// 仔细读题，数组内的值是有限定范围的，所以可以用模拟做
const maxChunksToSorted = function (arr) {
  const n = arr.length;
  let ans = 0;
  // 区间的最大最小值，如果正好是此时遍历的左右区间的 索引值，则可以当做一个块拆分
  // 因为区间内排序正好是满足区间上下界索引的
  for (let l = 0, r = 0, max = -1, min = n; r < n; ++r) {
    max = Math.max(max, arr[r]);
    min = Math.min(min, arr[r]);
    if (l === min && r === max) {
      ans++;
      l = r + 1;
      max = -1;
      min = n;
    }
  }
  return ans;
};
