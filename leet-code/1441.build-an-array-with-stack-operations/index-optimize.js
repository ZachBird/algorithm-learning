/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const PUSH = 'Push';
const POP = 'Pop';

const buildArray = function (target, n) {
  // 既然有偷鸡，那就有优化
  const m = target.length;
  const ans = [];
  // 思路是：栈顶与当前遍历到的 n 不相同，就要相应的推个 pop 进去
  // 所以遍历主体是 n
  for (let i = 1, j = 0; i <= n && j < m; ++i) {
    ans.push(PUSH);
    if (target[j] !== i) {
      ans.push(POP);
    } else {
      j++;
    }
  }
  return ans;
};
