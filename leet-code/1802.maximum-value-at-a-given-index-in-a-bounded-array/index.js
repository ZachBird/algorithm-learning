/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const valid = (mid, n, index, maxSum) => {
  // index 左右两侧有多少个元素
  const leftCount = index;
  const rightCount = n - 1 - index;
  return mid + sum(mid, leftCount) + sum(mid, rightCount) <= maxSum;
};

const sum = (max, restCount) => {
  if (restCount + 1 < max) {
    // 没有提前下降至 1
    const min = max - restCount;
    return Math.floor((max - 1 + min) * restCount / 2);
  } else {
    // 提前下降至 1，则有一个以上的 1
    // 有多少个 1
    const ones = restCount - (max - 1);
    // return Math.floor((1 + max - 1) * (max - 1) / 2 + ones);
    return Math.floor(max * (max - 1) / 2 + ones);
  }
};

const maxValue = function (n, index, maxSum) {
  // 二分查找，找到满足条件的值，上下界为 1 ~ maxSum
  let left = 1;
  let right = maxSum;
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (valid(mid, n, index, maxSum)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
