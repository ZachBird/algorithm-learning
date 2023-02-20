/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const FLUSH = 'Flush';
const THREE = 'Three of a Kind';
const PAIR = 'Pair';
const HIGH_CARD = 'High Card';

const bestHand = function (ranks, suits) {
  const map = new Map();

  let maxCount = 1;
  for (const rank of ranks) {
    map.set(rank, map.get(rank) ? map.get(rank) + 1 : 1);
    maxCount = Math.max(maxCount, map.get(rank));
  }

  let isSameColor = true;
  let curColor = suits[0];
  for (const suit of suits) {
    if (suit !== curColor) {
      isSameColor = false;
      break;
    }
    curColor = suit;
  }

  return isSameColor
    ? FLUSH
    : (maxCount === 2
        ? PAIR
        : (maxCount >= 3 ? THREE : HIGH_CARD));
};
