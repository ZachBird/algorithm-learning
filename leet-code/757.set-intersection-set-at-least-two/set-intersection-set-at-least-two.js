/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function (intervals) {
  const orderIns = intervals.sort((a, b) => {
    // 这里要注意 b[0] - a[0]，不然下例会出错
    return a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0];
  });

  let ans = 0;
  let max = -1;
  let secondaryMax = -1;
  for (const range of orderIns) {
    if (range[0] > max) {
      // 没覆盖当前区间，没交集，取两个点
      secondaryMax = range[1] - 1;
      max = range[1];
      ans += 2;
    } else if (range[0] > secondaryMax) {
      secondaryMax = max;
      max = range[1];
      ans++;
    }
  }
  return ans;
};

console.log(intersectionSizeTwo([[1, 3], [3, 7], [5, 7], [7, 8]]));
// expect: 5
// wrong: 6, 如果排序条件写错的话
