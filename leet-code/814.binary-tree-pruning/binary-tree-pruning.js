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
 * @return {TreeNode}
 */
const pruneTree = function (root) {
  // 树的问题首先想递归解决
  // 递归先确定递归退出条件
  if (root === null) return null;
  // 遍历二叉树
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  // 走到这里，意味着当前节点的子树已经处理完成了
  // 如果还有子树，返回当前节点，不能剪
  if (root.left !== null || root.right !== null) return root;
  return root.val !== 0 ? root : null;
};

// 输入：root = [1,0,1,0,0,0,1]
// 输出：[1,null,1,null,1]
