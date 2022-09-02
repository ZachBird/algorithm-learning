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
 * @return {number}
 */
const longestUnivaluePath = function (root) {
  let ans = 0;
  function dfs (root) {
    if (root === null) return 0;
    // 当前节点的或左或右的路径长度，只用来做 dfs 路径长度的传递
    let curPath = 0;
    // 以当前节点为最高节点时的最大长度，更新最大路径长度
    let longestPath = 0;
    // 左右节点的最大长度
    const leftPath = dfs(root.left);
    const rightPath = dfs(root.right);
    if (root.left !== null && root.val === root.left.val) {
      curPath = leftPath + 1;
      longestPath += leftPath + 1;
    }
    if (root.right !== null && root.val === root.right.val) {
      curPath = Math.max(curPath, rightPath + 1);
      longestPath += rightPath + 1;
    }
    ans = Math.max(ans, longestPath);
    return curPath;
  }
  dfs(root);
  return ans;
};
