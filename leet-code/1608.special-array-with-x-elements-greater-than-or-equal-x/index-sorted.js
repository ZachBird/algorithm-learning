/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
  const descSorted = [...nums].sort((a, b) => b - a);
  const len = descSorted.length;
  for (let i = 1; i <= len; i++) {
    // i === len 的条件为了保证 i = n 时正确返回
    if (descSorted[i - 1] >= i && (i === len || descSorted[i] < i)) {
      return i;
    }
  }
  return -1;
};
