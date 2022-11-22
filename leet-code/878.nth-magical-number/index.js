/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const gcd = function (a, b) {
  return b === 0 ? a : gcd(b, a % b);
};

const lcm = function (a, b) {
  return a * b / gcd(a, b);
};

const check = function (x, a, b, c) {
  return Math.floor(x / a) + Math.floor(x / b) - Math.floor(x / c);
};

const MOD = 1e9 + 7;

const nthMagicalNumber = function (n, a, b) {
  const c = Math.floor(lcm(a, b));
  let left = 0;
  let right = Math.max(a, b) * n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid, a, b, c) >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right % MOD;
};
