/**
 * @param {string} boxes
 * @return {number[]}
 */
// 解法一 两重循环
const minOperations = function (boxes) {
  // 解法二 预处理数组
  const n = boxes.length;
  let firstSteps = 0;
  let leftCnt = boxes[0] === '0' ? 0 : 1;
  let rightCnt = 0;
  for (let i = 1; i < n; ++i) {
    if (boxes[i] === '1') {
      rightCnt++;
      firstSteps += i;
    }
  }

  const ans = new Array(n).fill(0);
  ans[0] = firstSteps;
  for (let i = 1; i < n; ++i) {
    firstSteps += leftCnt - rightCnt;
    if (boxes[i] === '1') {
      leftCnt++;
      rightCnt--;
    }
    ans[i] = firstSteps;
  }
  return ans;
};
