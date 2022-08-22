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
 * @return {string[][]}
 */
let height = 0;
let martix = [];
const printTree = function (root) {
  height = 0; // lc OJ 系统会沿用上一个 case 的全局变量。TODO: 可以改写成不使用全局变量的 dfs
  getHeightDFS(root, 0);
  const rows = height + 1;
  const cols = (1 << rows) - 1;
  martix = new Array(rows).fill(null).map(() => new Array(cols).fill(''));
  generateMartixDFS(root, 0, (cols - 1) / 2);
  return martix;
};

const getHeightDFS = function (curNode, h) {
  if (curNode === null) return;
  height = Math.max(height, h);
  getHeightDFS(curNode.left, h + 1);
  getHeightDFS(curNode.right, h + 1);
};

const generateMartixDFS = function (curNode, x, y) {
  if (curNode === null) return;
  martix[x][y] = curNode.val.toString();
  generateMartixDFS(curNode.left, x + 1, y - (1 << (height - x - 1)));
  generateMartixDFS(curNode.right, x + 1, y + (1 << (height - x - 1)));
};
