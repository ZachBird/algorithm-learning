/**
 * @param {number[]} arr
 * @return {number[]}
 */
const threeEqualParts = function (arr) {
  const n = arr.length;
  let oneCount = 0;
  arr.forEach(bit => {
    if (bit === 1) oneCount++;
  });
  if (oneCount === 0) return [0, 2];
  // 能整除才能平分数组中的 1
  if (oneCount % 3 !== 0) return [-1, -1];
  const partial = oneCount / 3;
  // 平分的三个点
  let first = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < n; ++i) {
    if (arr[i] === 1) {
      if (oneCount === partial * 3) {
        first = i;
      } else if (oneCount === partial * 2) {
        second = i;
      } else if (oneCount === partial) {
        third = i;
      }
      oneCount--;
    }
  }
  // 三段分别对比
  const binaryLength = n - third;
  if (first + binaryLength <= second && second + binaryLength <= third) {
    let i = 0;
    while (third + i < n) {
      if (arr[first + i] !== arr[second + i] || arr[second + i] !== arr[third + i]) {
        return [-1, -1];
      }
      i++;
    }
    return [first + binaryLength - 1, second + binaryLength];
  }
  return [-1, -1];
};
