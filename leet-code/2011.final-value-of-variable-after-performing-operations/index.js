/**
 * @param {string[]} operations
 * @return {number}
 */
const addition = ['++X', 'X++'];
const finalValueAfterOperations = function (operations) {
  let ans = 0;
  for (const op of operations) {
    if (addition.includes(op)) {
      ans++;
    } else {
      ans--;
    }
  }
  return ans;
};
