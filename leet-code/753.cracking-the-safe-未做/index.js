const crackSafe = function (n, k) {
  const highest = Math.pow(10, n - 1);
  let ans = '';
  const seen = new Set();
  const dfs = (node) => {
    for (let x = 0; x < k; ++x) {
      const nei = node * 10 + x;
      if (!seen.has(nei)) {
        seen.add(nei);
        dfs(nei % highest);
        ans += x;
      }
    }
  };

  dfs(0);
  for (let i = 1; i < n; i++) {
    ans += '0';
  }
  return ans;
};
