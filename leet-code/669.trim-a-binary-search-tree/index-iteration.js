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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// 迭代的做法
// 1. 裁剪根节点
// 2. 裁剪左右节点
const trimBST = function (root, low, high) {
  // 处理根节点
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  if (root === null) return null;
  // 处理左节点
  let curLeft = root;
  while (curLeft.left !== null) {
    if (curLeft.left.val < low) {
      curLeft.left = curLeft.left.right;
    } else {
      curLeft = curLeft.left;
    }
  }
  // 处理右节点
  let curRight = root;
  while (curRight.right !== null) {
    if (curRight.right.val > high) {
      curRight.right = curRight.right.left;
    } else {
      curRight = curRight.right;
    }
  }
  return root;
};
