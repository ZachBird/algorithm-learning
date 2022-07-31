function maxLevelSum (root) {
  const queue = [];
  let head = 0;
  let tail = 1;
  queue[0] = root;
  let max = Number.MIN_SAFE_INTEGER;
  let depth = 1;
  let ans = 0;
  while (head < tail) {
    // 每轮循环中，都会将下一层的所有子节点置入队列，尾指针后移
    let curLevelSize = tail - head;
    let curLevelSum = 0;
    while (curLevelSize > 0) {
      curLevelSize--;
      const curHeadRoot = queue[head];
      head++;
      if (curHeadRoot.left !== null) {
        queue[tail] = curHeadRoot.left;
        tail++;
      }
      if (curHeadRoot.right !== null) {
        queue[tail] = curHeadRoot.right;
        tail++;
      }
      curLevelSum += curHeadRoot.val;
    }
    if (curLevelSum > max) {
      max = curLevelSum;
      ans = depth;
    }
    depth++;
  }
  return ans;
};
