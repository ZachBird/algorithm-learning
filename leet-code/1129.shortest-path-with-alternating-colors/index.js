/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const targets = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => []));
  // 节点路径为红色，起点为 edgeStart 的所有终点节点
  for (const [edgeStart, edgeEnd] of redEdges) {
    targets[0][edgeStart].push(edgeEnd);
  }

  // 节点路径为蓝色，起点为 edgeStart 的所有终点节点
  for (const [edgeStart, edgeEnd] of blueEdges) {
    targets[1][edgeStart].push(edgeEnd);
  }

  // 要求最小值，用最大值填充
  // 以红、蓝色路径到达 index 节点的最短路径
  const paths = new Array(2).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
  paths[0][0] = 0;
  paths[1][0] = 0;

  // 广搜 queue
  // 节点编号 + 节点路径类型
  const queue = [
    [0, 0],
    [0, 1]
  ];

  while (queue.length) {
    const [curNode, pathColor] = queue.shift();
    // 遍历另一种颜色的 target 列表
    const invertColor = 1 - pathColor;
    for (const target of targets[invertColor][curNode]) {
      if (paths[invertColor][target] !== Number.MAX_VALUE) {
        // 如果满足条件的节点已经设置过值，那么不再处理，因为已经设置的值一定是最小值
        // 还可以避免图中的环
        continue;
      }
      paths[invertColor][target] = paths[pathColor][curNode] + 1;
      queue.push([target, invertColor]);
    }
  }

  // 处理结果
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    ans[i] = Math.min(paths[0][i], paths[1][i]);
    if (ans[i] === Number.MAX_VALUE) {
      ans[i] = -1;
    }
  }
  return ans;
};
