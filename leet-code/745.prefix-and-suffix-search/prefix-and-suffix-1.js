/**
 * @param {string[]} words
 */
// TODO: 字典树解法需要学一下
const WordFilter = function (words) {
  // 存所有前后缀可能性
  this.dictionary = new Map();
  for (let i = 0; i < words.length; ++i) {
    const curWord = words[i];
    const wordLength = curWord.length;
    for (let j = 1; j <= wordLength; ++j) {
      for (let k = 1; k <= wordLength; ++k) {
        this.dictionary.set(`${curWord.substring(0, j)}&${curWord.substring(wordLength - k)}`, i);
      }
    }
  }
};

/**
* @param {string} pref
* @param {string} suff
* @return {number}
*/
WordFilter.prototype.f = function (pref, suff) {
  const target = `${pref}&${suff}`;
  if (this.dictionary.has(target)) {
    return this.dictionary.get(target);
  } else {
    return -1;
  }
};

/**
* Your WordFilter object will be instantiated and called as such:
* var obj = new WordFilter(words)
* var param_1 = obj.f(pref,suff)
*/
