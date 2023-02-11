/**
 * @param {number[]} amount
 * @return {number}
 */
const fillCups = function (amount) {
  amount.sort((a, b) => a - b);
  return amount[2] >= amount[0] + amount[1]
    ? amount[2]
    : Math.floor((amount[0] + amount[1] + amount[2] + 1) / 2);
};
