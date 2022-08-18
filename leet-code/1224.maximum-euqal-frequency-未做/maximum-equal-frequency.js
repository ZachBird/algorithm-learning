/**
 * @param {number[]} nums
 * @return {number}
 */
const maxEqualFreq = function (nums) {
  // 会出现的情况：
  // 1. 出现的各元素，频次均只有一个，那么移除一个就行，即 max = length - 1
  // 2. 有一个只出现过一次的元素，移除
  // 3. 有一个元素的频次比最大频次大1，移除一个该元素得到最大

  // 所有数的出现次数都是 maxFreq 或 maxFreq − 1，并且最大出现次数的数只有一个：
  // 删除一个最大出现次数的数，那么所有数的出现次数都是 maxFreq − 1
  // 22223 -> 22222
  // 3333332 -> 3333331

  // 遍历的过程中计数
  // 当前最大频率，指的是相同的数字出现的最多次数
  // 那这样就要记录每个数字出现的频次
};

console.log(maxEqualFreq([2, 2, 1, 1, 5, 3, 3, 5]));
// expect: 7 [2, 2, 1, 1, 5, 3, 3]

console.log(maxEqualFreq([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]));
// expect: 13

const maxEqualFreq11 = function (nums) {
  const freq = new Map();
  const count = new Map();
  let res = 0; let maxFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0);
    }
    if (count.get(nums[i]) > 0) {
      freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1);
    }
    count.set(nums[i], count.get(nums[i]) + 1);
    maxFreq = Math.max(maxFreq, count.get(nums[i]));
    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0);
    }
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1);
    const ok = maxFreq === 1 ||
              freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1 ||
              freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1;
    if (ok) {
      res = Math.max(res, i + 1);
    }
  }
  return res;
};
