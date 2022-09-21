/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const kSimilarity = function (s1, s2) {
  const n = s1.length;
  // 每置换一次字母顺序，存入一个步骤，[当前结果, startIndex]
  const stepQueue = [[s1, 0]];
  // 置换过程中出现的中间状态，如果重复，则跳过，用作剪枝
  const visitedStr = new Set([s1]);
  let step = 0;
  while (stepQueue.length > 0) {
    const curSubStepCount = stepQueue.length;
    for (let i = 0; i < curSubStepCount; ++i) {
      let [curStepStr, startIndex] = stepQueue.shift();
      if (curStepStr === s2) return step;
      // 找到第一个不同的索引
      while (startIndex < n && curStepStr[startIndex] === s2[startIndex]) {
        startIndex++;
      }
      for (let j = startIndex + 1; j < n; ++j) {
        if (s2[j] === curStepStr[j]) continue;
        // 如果找到与target位置相同的，可替换的字符
        if (s2[startIndex] === curStepStr[j]) {
          const newStepStr = swap(curStepStr, startIndex, j);
          if (!visitedStr.has(newStepStr)) {
            visitedStr.add(newStepStr);
            stepQueue.push([newStepStr, startIndex + 1]);
          }
        }
      }
    }
    step++;
  }
  return step;
};

const swap = function (str, start, end) {
  const strArr = str.split('');
  const temp = strArr[start];
  strArr[start] = strArr[end];
  strArr[end] = temp;
  return strArr.join('');
};
