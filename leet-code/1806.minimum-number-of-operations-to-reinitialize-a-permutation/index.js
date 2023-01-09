/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function (n) {
  let prem = new Array(n).fill(1).map((_, idx) => idx);
  const target = new Array(n).fill(1).map((_, idx) => idx);
  let ans = 0;
  while (true) {
    const arr = new Array(n).fill(0);
    for (let i = 0; i < arr.length; ++i) {
      if ((i & 1) === 0) {
        arr[i] = prem[Math.floor(i / 2)];
      } else {
        arr[i] = prem[Math.floor(n / 2) + Math.floor((i - 1) / 2)];
      }
    }

    prem = arr;
    ans++;

    if (prem.toString() === target.toString()) break;
  }
  return ans++;
};
