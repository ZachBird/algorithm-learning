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
// 二叉搜索树性质：
// 左子树上的值，均小于根节点，所以只要一个左节点小于，那么所有子节点都小于
// 右子树上的值，均大于根节点，所以反之亦然
const trimBST = function (root, low, high) {
  if (root === null) return null;
  if (root.val < low) {
    // 值小于下界，那么左子树均裁剪，对右子树操作
    return trimBST(root.right, low, high);
  } else if (root.val > high) {
    // 反之亦然
    return trimBST(root.left, low, high);
  } else {
    // 不裁剪的情况
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
  }
};
