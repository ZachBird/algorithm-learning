/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
  // 哈希表模拟
  const n = word.length;
  const hashSet = new Set();

  let p1 = 0;
  for (let i = 0; i < n; ++i) {
    if (!Number.isNaN(parseInt(word[i]))) {
      while (word[i] === '0') {
        i++;
      }
      p1 = i;
      while (!Number.isNaN(parseInt(word[p1]))) {
        p1++;
      }
      hashSet.add(word.substring(i, p1));
      i = p1;
    }
  }
  return hashSet.size;
};
