/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements1 = function (arr, k, x) {
  // 思路1是排序
  // 思路2：二分 + 双指针
  // 1. 二分查到最小差值
  // 2. 以停止位置的索引，左右框出 k 个元素
  let head = 0;
  let tail = arr.length - 1;
  while (head < tail) {
    const middle = (head + tail + 1) >> 1;
    if (arr[middle] <= x) {
      head = middle;
    } else {
      // 为什么要 - 1 二分的边界问题
      tail = middle - 1;
    }
  }
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements2 = function (arr, k, x) {
  const list = [...arr];
  list.sort((a, b) => {
    if (Math.abs(a - x) !== Math.abs(b - x)) {
      return Math.abs(a - x) - Math.abs(b - x);
    } else {
      return a - b;
    }
  });
  const ans = list.slice(0, k);
  ans.sort((a, b) => a - b);
  return ans;
};

findClosestElements2([1, 2, 3, 4, 5], 4, 3);
// expect: [1, 2, 3, 4]
