/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function (arr, pieces) {
  // 另一种哈希表思路
  // 从 pieces 入手，存每个数组的第一个元素，及其对应索引
  const pieceIdxMap = new Map();
  for (let i = 0, n = pieces.length; i < n; ++i) {
    pieceIdxMap.set(pieces[i][0], i);
  }
  // 然后通过跳着处理 arr 来进行判断，能把 arr 顺利处理完，证明全符合
  for (let i = 0, n = arr.length; i < n;) {
    if (!pieceIdxMap.has(arr[i])) return false;
    const pieceIdx = pieceIdxMap.get(arr[i]);
    const curPiece = pieces[pieceIdx];
    const m = curPiece.length;
    for (let j = 0; j < m; ++j) {
      if (arr[i + j] !== curPiece[j]) return false;
    }
    i += m;
  }
  return true;
};
