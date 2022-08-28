const preimageSizeFZF = function (k) {
  return help(k + 1) - help(k);
};

const help = (k) => {
  let r = 5 * k;
  let l = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (zeta(mid) < k) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r + 1;
};

const zeta = (x) => {
  let res = 0;
  while (x != 0) {
    res += Math.floor(x / 5);
    x = Math.floor(x / 5);
  }
  return res;
};
