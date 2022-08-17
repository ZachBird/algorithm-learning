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
const deepestLeavesSum = function (root) {
  // 层序遍历
  // 迭代做法
  const stack = [];
  let head = 0;
  let tail = 1;
  stack.push(root);
  let ans = 0;
  while (head !== tail) {
    const curLayerCount = tail - head;
    let curLayerSum = 0;
    for (let i = 0; i < curLayerCount; i++) {
      const curNode = stack[head];
      curLayerSum += curNode.val;
      if (curNode && curNode.left !== null) {
        stack.push(curNode.left);
        tail++;
      }
      if (curNode && curNode.right !== null) {
        stack.push(curNode.right);
        tail++;
      }
      head++;
    }
    ans = curLayerSum;
  }
  return ans;
};

// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：19
