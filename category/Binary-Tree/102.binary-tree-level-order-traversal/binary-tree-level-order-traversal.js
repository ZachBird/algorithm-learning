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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  // 用迭代的方法做，要维护一个栈
  const stack = [];
  // 初始将 root 入栈
  stack[0] = root;
  let level = 0;

  // 退出条件为栈为空
  const ans = [];
  while (stack.length !== 0) {
    const curLevelSize = stack.length;
    const curLevelNodes = [];
    for (let i = 0; i < curLevelSize; ++i) {
      const curNode = stack.shift();
      curLevelNodes.push(curNode.val);
      if (curNode.left !== null) {
        stack.push(curNode.left);
      };
      if (curNode.right !== null) {
        stack.push(curNode.right);
      };
    }
    ans.push(curLevelNodes);
    level++;
  }
  console.log(level);
  return ans;
};
