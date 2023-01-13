const rearrangeCharacters = function (s, target) {
  const sCounts = new Map();
  const targetCounts = new Map();
  const n = s.length; const m = target.length;
  for (let i = 0; i < m; i++) {
    const c = target[i];
    targetCounts.set(c, (targetCounts.get(c) || 0) + 1);
  }
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (targetCounts.has(c)) {
      sCounts.set(c, (sCounts.get(c) || 0) + 1);
    }
  }
  let ans = Number.MAX_VALUE;
  for (const [c, count] of targetCounts.entries()) {
    const totalCount = sCounts.has(c) ? sCounts.get(c) : 0;
    ans = Math.min(ans, Math.floor(totalCount / count));
    if (ans === 0) {
      return 0;
    }
  }
  return ans;
};
