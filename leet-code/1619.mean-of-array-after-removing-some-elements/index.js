/**
 * @param {number[]} arr
 * @return {number}
 */
// 直接模拟
const trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let sum = 0;
  for (let i = n / 20; i < 19 * n / 20; ++i) {
    sum += arr[i];
  }
  const avg = sum / (n * 9 / 10);
  return avg.toFixed(5);
};
