/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function (nums) {
  const map = new Map();
  let cnt = 0;
  for (const num of nums) {
    map.set(num, !(map.get(num) || false));
    if (!map.get(num)) {
      cnt++;
    }
  }

  // 这样统计不出数对数量
  // const ans = [0, 0];
  // for (const [num, stat] of map.entries()) {
  //   if (!stat) ans[0]++;
  //   else ans[1]++;
  // }

  // return ans;
  return [cnt, nums.length - cnt * 2];
};
