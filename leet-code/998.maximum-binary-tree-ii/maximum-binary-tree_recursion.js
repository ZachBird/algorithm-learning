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
 * @param {number} val
 * @return {TreeNode}
 */
const adjustTree = function (root, val) {
  if (root.right === null) {
    root.right = new TreeNode(val);
    return root;
  };
  if (root.val > val) {
    // 要注意是满足符合要求位置的父节点大于 val，且原位置的节点要小于 val，否则继续查找
    if (root.right !== null && root.right.val < val) {
      const newNode = new TreeNode(val);
      const curRight = root.right;
      newNode.left = curRight;
      root.right = newNode;
      return root;
    } else {
      adjustTree(root.right, val);
    }
  } else {
    adjustTree(root.right, val);
  }
  return root;
};

const insertIntoMaxTree = function (root, val) {
  if (root.val < val) {
    const newRoot = new TreeNode(val);
    newRoot.left = root;
    return newRoot;
  } else {
    root = adjustTree(root, val);
    return root;
  }
};
