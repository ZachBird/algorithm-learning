/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
// 这种解法过不了这种: "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
const maxRepeating = function (sequence, word) {
  const n = sequence.length;
  const m = word.length;
  let p = 0;
  let count = 0;
  let k = 0;
  for (let i = 0; i < n; ++i) {
    const curChar = sequence[i];
    if (curChar === word[p++]) {
      if (p === m) {
        p = 0;
        count++;
      }
    } else {
      if (count !== 0) k = Math.max(k, count);
      p = 0;
      count = 0;
    }
  }
  if (count !== 0) k = Math.max(k, count);
  return k;
};
