/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
  // 滑动窗口
  const n = fruits.length;
  // 根据 fruits[i] 的数据范围，存不同种类水果的个数
  const fruitMap = new Array(n).fill(0);
  let ans = 0;
  for (let r = 0, l = 0, curTotal = 0; r < n; ++r) {
    const curFruitType = fruits[r];
    if (++fruitMap[curFruitType] === 0) curTotal++;
    if (curTotal > 2) {
      if (--fruitMap[l++] === 0) curTotal--;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
