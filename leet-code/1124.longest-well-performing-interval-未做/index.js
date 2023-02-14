const longestWPI = function (hours) {
  const n = hours.length;
  const s = new Array(n + 1).fill(0);
  const stk = [0];
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    if (s[stk[stk.length - 1]] > s[i]) {
      stk.push(i);
    }
  }

  let res = 0;
  for (let r = n; r >= 1; r--) {
    while (stk.length && s[stk[stk.length - 1]] < s[r]) {
      res = Math.max(res, r - stk.pop());
    }
  }
  return res;
};
