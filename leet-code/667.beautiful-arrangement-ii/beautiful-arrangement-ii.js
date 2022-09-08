/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 模拟题
// 特殊情况推至一般情况
// k = 1 , ans = [1, 2, ..., n], 「单调顺序排列」，满足 k = 1 的要求
// 题目例子中的「间隔位分别升降序排列」, ans = [1, n, 2, n - 1, 3, n - 2, ...,]
// 这样差值从 n - 1 一直到 1, k = n - 1
// n 个数按照这样的排列，产生 n - 1 个差值
// 也就是 k 个数 产生 k - 1 个差值
// 所以思路是前半段「单调顺序排列」。始终为 1
// 后半段用 k 个元素产生 k - 1 个，与前半段相加 正好 k 个
const constructArray = function (n, k) {
  const ans = new Array(n).fill(0);
  let curNum = 1;
  // 前半段 数字是 1 ~ n 索引为 0 ~ n-1
  // i 从 1 开始为 n - k, 那样外面要记索引
  for (let i = 0; i < n - k - 1; ++i) {
    ans[i] = curNum;
    curNum++;
  }
  // 后半段
  let j = n;
  let flag = true;
  for (let i = n - k - 1; i < n; ++i) {
    if (flag) {
      ans[i] = curNum++;
    } else {
      ans[i] = j--;
    }
    flag = !flag;
  }
  return ans;
};

constructArray(6, 3);
// [ 1, 2, 3, 6, 4, 5 ]
