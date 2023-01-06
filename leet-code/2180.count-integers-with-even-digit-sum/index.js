/**
 * @param {number} num
 * @return {number}
 */
const countEven = function (num) {
  let ans = 0;
  for (let i = 1; i <= num; ++i) {
    let num = i;
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if ((sum & 1) === 0) {
      ans++;
    }
  }
  return ans;
};
