/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function (baseCosts, toppingCosts, target) {
  const n = baseCosts.length;
  const m = toppingCosts.length;
  const toppingSet = new Set();
  function dfs (u, m, cur) {
    if (u === m) {
      toppingSet.add(cur);
    } else {
      for (let i = 0; i <= 2; i++) dfs(u + 1, m, cur + i * toppingCosts[u]);
    }
  }
  dfs(0, m, 0);
  // console.log(toppingSet);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; ++i) {
    const curBase = baseCosts[i];
    for (const topping of toppingSet) {
      const curDiff = curBase + topping - target;
      if (Math.abs(curDiff) > Math.abs(ans)) continue;
      if (Math.abs(curDiff) === Math.abs(ans) && curDiff > 0 && ans < 0) continue;
      ans = curDiff;
    }
  }
  return target + ans;
};
