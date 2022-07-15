/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function Node (val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
const intersect = function (qt1, qt2) {
  // 四叉树，兄弟问题是 427. 建立四叉树

  // 递归
  // 终止条件为 均为叶子节点，做逻辑或，返回
  if (qt1.isLeaf && qt2.isLeaf) {
    if (qt1.val) return qt1;
    else if (qt2.val) return qt2;
    else return qt1;
  }
  // 如果有一个不为叶子节点，构造新四叉树节点
  const newQT = new Node();
  // 递归的逻辑就是，如果某个节点不为叶子节点，则送进函数再去创建新节点
  newQT.topLeft = intersect(qt1.isLeaf ? qt1 : qt1.topLeft, qt2.isLeaf ? qt2 : qt2.topLeft);
  newQT.topRight = intersect(qt1.isLeaf ? qt1 : qt1.topRight, qt2.isLeaf ? qt2 : qt2.topRight);
  newQT.bottomLeft = intersect(qt1.isLeaf ? qt1 : qt1.bottomLeft, qt2.isLeaf ? qt2 : qt2.bottomLeft);
  newQT.bottomRight = intersect(qt1.isLeaf ? qt1 : qt1.bottomRight, qt2.isLeaf ? qt2 : qt2.bottomRight);
  // 四个节点构造完之后，需要确定 node 的 isLeaf 和 val
  // 规则为：
  // 如果四个节点均为叶子节点，值相同，isLeaf 为 true，val 为 节点值，节点置为 null
  // 如果四个节点不都是叶子节点，isLeaf 为 false，val 为任意值

  // 判断是否均为叶子节点
  const allIsLeaf = newQT.topLeft.isLeaf &&
                    newQT.topRight.isLeaf &&
                    newQT.bottomLeft.isLeaf &&
                    newQT.bottomRight.isLeaf;
  // 判断均为 1 - 逻辑运算记一下
  const allIsOne = newQT.topLeft.val &&
                  newQT.topRight.val &&
                  newQT.bottomLeft.val &&
                  newQT.bottomRight.val;
  // 判断均为 0 - 为 true 则证明非全 0
  const notAllIsZero = newQT.topLeft.val ||
                    newQT.topRight.val ||
                    newQT.bottomLeft.val ||
                    newQT.bottomRight.val;
  newQT.isLeaf = allIsLeaf && (allIsOne || !notAllIsZero);
  if (newQT.isLeaf) {
    newQT.topLeft = null;
    newQT.topRight = null;
    newQT.bottomLeft = null;
    newQT.bottomRight = null;
  }
  newQT.val = newQT.topLeft.val;
  return newQT;
};

console.log(intersect(
  [[0, 1], [1, 1], [1, 1], [1, 0], [1, 0]],
  [[0, 1], [1, 1], [0, 1], [1, 1], [1, 0], null, null, null, null, [1, 0], [1, 0], [1, 1], [1, 1]]
));
// expect: [[0,0],[1,1],[1,1],[1,1],[1,0]]
