/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function (words, pref) {
  let ans = 0;
  for (const word of words) {
    if (new RegExp(`^${pref}`).test(word)) ans++;
  }
  return ans;
};
