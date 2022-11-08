/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  const n = words.length;
  const allowedSet = new Set(allowed.split(''));
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    const curWords = words[i];
    let flag = true;
    for (const eachChar of curWords) {
      if (!allowedSet.has(eachChar)) {
        flag = false;
      }
    }
    if (flag) ans++;
  }
  return ans;
};
