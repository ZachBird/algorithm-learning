const magicDict = ['hello', 'hallo', 'leetcode'];
function searchWord (searchWord) {
  const n = magicDict.length;
  let result = false;
  for (let i = 0; i < n; ++i) {
    const curWord = magicDict[i];
    // 长度不相同
    if (curWord.length !== searchWord.length) continue;
    // 对比时，只要有一个能为 true，则返回 true
    let diffCount = 2;
    let curResult = false;
    for (let j = 0; j < searchWord.length; ++j) {
      if (curWord[j] !== searchWord[j]) {
        diffCount--;
        if (diffCount === 0) {
          curResult = false;
          break;
        }
      }
    }
    console.log(diffCount);
    if (diffCount === 1) return true;
    result = curResult;
  }
  return result;
};

console.log(searchWord('hallo'));
