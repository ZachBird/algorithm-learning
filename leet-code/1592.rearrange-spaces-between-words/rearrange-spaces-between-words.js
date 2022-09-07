/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
  const words = [];
  let spaceCount = 0;
  const n = text.length;
  let position = 0;
  while (position < n) {
    if (text[position] === ' ') {
      spaceCount++;
    } else {
      let curWord = text[position++];
      while (text[position] && text[position] !== ' ') {
        curWord += text[position++];
      }
      words.push(curWord);
      continue;
    }
    position++;
  }
  const wordCount = words.length;
  const avaSpaceCount = wordCount === 1 ? 0 : Math.floor(spaceCount / (words.length - 1));
  const tailSpaceCount = wordCount === 1 ? spaceCount : spaceCount % (words.length - 1);
  let ans = '';
  for (let i = 0; i < words.length; ++i) {
    ans += words[i];
    if (i !== words.length - 1) {
      ans += ' '.repeat(avaSpaceCount);
    }
  }
  ans += ' '.repeat(tailSpaceCount);
  return ans;
};

reorderSpaces('  hello');
