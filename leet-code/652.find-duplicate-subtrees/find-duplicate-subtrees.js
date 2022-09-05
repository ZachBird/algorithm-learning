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
 * @return {TreeNode[]}
 */
// DFS + 哈希表
const findDuplicateSubtrees = function (root) {
  const subTreeMap = new Map();
  const ans = [];
  function dfs (root) {
    // 空节点 key 设置为 *
    if (root === null) return '*';
    // 有值节点设置为 val + _
    let curKey = root.val + '_';
    curKey += dfs(root.left);
    curKey += dfs(root.right);
    if (!subTreeMap.has(curKey)) {
      subTreeMap.set(curKey, 1);
    } else {
      subTreeMap.set(curKey, subTreeMap.get(curKey) + 1);
    }
    if (subTreeMap.get(curKey) === 2) ans.push(root);
    return curKey;
  }
  dfs(root);
  return ans;
};

// findDuplicateSubtrees();
// Input: root = [2, 2, 2, 3, null, 3, null];
// Output: [[2, 3], [3]];
