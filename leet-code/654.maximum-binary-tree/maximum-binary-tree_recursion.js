/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const buildTree = function (nums, lBoundry, rBoundry) {
  if (lBoundry > rBoundry) return null;
  let maxIdx = lBoundry;
  for (let i = lBoundry; i <= rBoundry; ++i) {
    if (nums[i] > nums[maxIdx]) maxIdx = i;
  }
  const newNode = new TreeNode(nums[maxIdx]);
  newNode.left = buildTree(nums, lBoundry, maxIdx - 1);
  newNode.right = buildTree(nums, maxIdx + 1, rBoundry);
  return newNode;
};

const constructMaximumBinaryTree = function (nums) {
  return buildTree(nums, 0, nums.length - 1);
};
