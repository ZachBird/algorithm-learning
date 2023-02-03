/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */

const btreeGameWinningMove = function (root, n, x) {
  let leftSize = 0;
  let rigthSize = 0;

  const dfs = (root) => {
    if (root === null) return 0;
    const subLeft = dfs(root.left);
    const subRight = dfs(root.right);
    if (root.val === x) {
      leftSize = subLeft;
      rigthSize = subRight;
    }
    return subLeft + subRight + 1;
  };

  dfs(root);

  return Math.max(leftSize, rigthSize, (n - 1 - leftSize - rigthSize)) * 2 > n;
};
