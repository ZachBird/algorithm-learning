const MOD = BigInt(1e9 + 7);
function rectangleArea (rs) {
  const list = [];
  for (const info of rs) {
    list.push(info[0]); list.push(info[2]);
  }
  list.sort((a, b) => a - b);
  let ans = 0n;
  for (let i = 1; i < list.length; i++) {
    const a = list[i - 1]; const b = list[i]; const len = b - a;
    if (len === 0) continue;
    const lines = [];
    for (const info of rs) {
      if (info[0] <= a && b <= info[2]) lines.push([info[1], info[3]]);
    }
    lines.sort((l1, l2) => {
      return l1[0] !== l2[0] ? l1[0] - l2[0] : l1[1] - l2[1];
    });
    let tot = 0n; let l = -1; let r = -1;
    for (const cur of lines) {
      if (cur[0] > r) {
        tot += BigInt(r - l);
        l = cur[0]; r = cur[1];
      } else if (cur[1] > r) {
        r = cur[1];
      }
    }
    tot += BigInt(r - l);
    ans += tot * BigInt(len);
    ans %= MOD;
  }
  return Number(ans);
};
