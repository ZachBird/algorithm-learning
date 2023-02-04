/**
 * @param {number[]} coins
 * @return {number}
 */
const getMaximumConsecutive = function (coins) {
  let limit = 0;
  coins.sort((a, b) => a - b);

  for (const coin of coins) {
    if (coin > limit + 1) break;
    limit += coin;
  }

  return limit + 1;
};
