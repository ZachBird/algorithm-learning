/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthGrammar = function (n, k) {
  // 数学 + 递归
  if (k === 1) return 0;
  // k 在 n 行新增的区域，与上一行对应位置结果取反
  else if (k > 1 << (n - 2)) return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));
  // k 在 n 行非新增的区域，与上一行对应位置结果相同
  else return kthGrammar(n - 1, k);
};
