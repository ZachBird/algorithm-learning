/**
 * @param {string[]} words
 * @return {string[]}
 */
// 模拟题，复杂优化暂时不涉及
const stringMatching = function (words) {
  const ans = [];
  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words.length; ++j) {
      if (i === j) continue;
      if (words[j].indexOf(words[i]) > -1) {
        ans.push(words[i]);
        break;
      }
    }
  }
  return ans;
};
