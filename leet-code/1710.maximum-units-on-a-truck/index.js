/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  const sortedBox = boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (const [cnt, num] of sortedBox) {
    if (truckSize - cnt >= 0) {
      truckSize -= cnt;
      ans += num * cnt;
    } else {
      ans += num * truckSize;
      break;
    }
  }
  return ans;
};
console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));
