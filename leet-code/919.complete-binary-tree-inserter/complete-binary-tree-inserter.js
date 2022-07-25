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
 */
const CBTInserter = function (root) {
  // 构造完全二叉树
  // BFS 层序遍历，存层序遍历的结果
  const queue = [];
  let cur = 0;
  queue.push(root);
  // 注意 BFS 的遍历条件
  while (cur < queue.length) {
    const curNode = queue[cur];
    if (curNode.left !== null) queue.push(curNode.left);
    if (curNode.right !== null) queue.push(curNode.right);
    cur++;
  }

  this.queue = queue;
  this.curIndex = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  // eslint-disable-next-line no-undef
  const newNode = new TreeNode(val);
  // 从头开始遍历层数数组，找到有左右子节点为空的父节点
  while (this.queue[this.curIndex].left !== null && this.queue[this.curIndex].rigth !== null) {
    this.curIndex++;
  }
  const curFa = this.queue[this.curIndex];
  if (curFa.left === null) curFa.left = newNode;
  else curFa.right = newNode;
  this.queue.push(newNode);
  return curFa.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.queue[0];
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
