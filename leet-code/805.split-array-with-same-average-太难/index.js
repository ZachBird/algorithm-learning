const splitArraySameAverage = function (nums) {
  if (nums.length === 1) {
    return false;
  }
  const n = nums.length; const m = Math.floor(n / 2);
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  let isPossible = false;
  for (let i = 1; i <= m; i++) {
    if (sum * i % n === 0) {
      isPossible = true;
      break;
    }
  }
  if (!isPossible) {
    return false;
  }
  const dp = new Array(m + 1).fill(0).map(() => new Set());
  dp[0].add(0);
  for (const num of nums) {
    for (let i = m; i >= 1; i--) {
      for (const x of dp[i - 1]) {
        const curr = x + num;
        if (curr * n === sum * i) {
          return true;
        }
        dp[i].add(curr);
      }
    }
  }
  return false;
};
