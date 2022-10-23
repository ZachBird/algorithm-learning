/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  const n = word1.length;
  let i = 0;
  const m = word2.length;
  let j = 0;
  let ans = '';
  while (i < n || j < m) {
    if (i < n) ans += word1[i++];
    if (j < m) ans += word2[j++];
  }
  return ans;
};
