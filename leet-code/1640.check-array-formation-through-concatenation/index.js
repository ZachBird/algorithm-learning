/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function (arr, pieces) {
  // 哈希表
  const valIdxMap = new Map();
  for (let i = 0, n = arr.length; i < n; ++i) {
    valIdxMap.set(arr[i], i);
  }
  for (const piece of pieces) {
    const n = piece.length;
    if (n === 1) {
      if (valIdxMap.has(piece[0])) {
        valIdxMap.delete(piece[0]);
        continue;
      } else {
        return false;
      }
    }
    for (let i = 0, n = piece.length; i < n; ++i) {
      if (valIdxMap.has(piece[i])) {
        const arrIdx = valIdxMap.get(piece[i]);
        valIdxMap.delete(piece[i]);
        piece[i] = arrIdx;
        if (i > 0 && piece[i] !== (piece[i - 1] + 1)) return false;
      } else {
        return false;
      }
    }
  }
  return valIdxMap.size === 0;
};
