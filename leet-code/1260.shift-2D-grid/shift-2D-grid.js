/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0; let pre = 0;
  for (const x of nums) {
    pre += x;
    // console.log(pre, pre - k);
    if (mp.has(pre - k)) {
      console.log(pre, k, pre - k);
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
    // console.log(mp);
  }
  return count;
};

console.log(subarraySum([3, 5, 2, -2, 4, 1], 5));
