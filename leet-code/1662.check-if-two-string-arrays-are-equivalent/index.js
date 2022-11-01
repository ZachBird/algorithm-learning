/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;
  let i = 0;
  let j = 0;
  let p = 0;
  let q = 0;
  while (i < n && j < m) {
    if (word1[i][p] !== word2[j][q]) {
      return false;
    }
    if (p++ === word1[i].length - 1) {
      i++;
      p = 0;
    }
    if (q++ === word2[j].length - 1) {
      j++;
      q = 0;
    }
  }
  return i === n && j === m;
};
