/**
 * @param {number[][]} isInfected
 * @return {number}
 */

// Q: dirs 用来干啥的？
// A: 用来求相邻区域的坐标的
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const testCase = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

const containVirus = function (isInfected) {
  // 获取矩阵的宽高
  const m = isInfected.length;
  const n = isInfected[0].length;
  // Q: 计数，记的是啥？
  // A: 记的是最长防火墙的长度
  let ans = 0;
  while (true) {
    // 相邻区域
    const neighbors = [];
    // 放置的防火墙
    const firewalls = [];
    // 遍历矩阵
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        // 如果遇到 1，也就是触达病毒区域
        if (isInfected[i][j] === 1) {
          const queue = [];
          queue.push([i, j]);
          const neighbor = new Set();
          let firewall = 0;
          // 第几个相邻区域
          const idx = neighbors.length + 1;
          // 标记一下病毒区域，防止重复遍历
          isInfected[i][j] = -idx;

          while (queue.length > 0) {
            // 后续在遍历感染区域过程中，还会将感染位置的坐标存入
            // 所以直至感染坐标为空，继续搜索步骤
            const arr = queue.shift();
            const [x, y] = arr;
            for (let d = 0; d < 4; ++d) {
              const nx = x + dirs[d][0];
              const ny = y + dirs[d][1];
              // 相邻区域为自然数，且在矩阵的范围内
              if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if (isInfected[nx][ny] === 1) {
                  // 相邻且已经感染的，加入病区
                  queue.push([nx, ny]);
                  isInfected[nx][ny] = -idx;
                } else if (isInfected[nx][ny] === 0) {
                  // 相邻未感染的，防火墙长度加一，加入相邻区域队列
                  ++firewall;
                  neighbor.add(getHash(nx, ny));
                }
              }
            }
          }
          // 把当前感染区域的相邻区域和所需要的防火墙长度保存
          neighbors.push(neighbor);
          firewalls.push(firewall);
        }
      }
    }
    // 如果搜索下来没有相邻区域，则全部感染
    if (neighbors.length === 0) {
      break;
    }

    // 寻找相邻区域最大的感染区域 - 即威胁最大的区域
    let idx = 0;
    for (let i = 1; i < neighbors.length; ++i) {
      if (neighbors[i].size > neighbors[idx].size) {
        idx = i;
      }
    }
    // 将威胁最大区域的防火墙长度加上去
    ans += firewalls[idx];

    // 对已处理过后的矩阵进行还原，做下一轮处理
    // 处理感染区域
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (isInfected[i][j] < 0) {
          // 标记过的感染区域
          if (isInfected[i][j] !== -idx - 1) {
            // 非当前设置防火墙区域，还原
            isInfected[i][j] = 1;
          } else {
            // 已经设置了防火墙的感染区域，标记为 2，放置下一轮重复遍历
            isInfected[i][j] = 2;
          }
        }
      }
    }
    // 处理相邻区域
    for (let i = 0; i < neighbors.length; ++i) {
      if (i !== idx) {
        for (const val of neighbors[i]) {
          // 位运算，因为前面存相邻节点坐标时，做了hash运算，现在按相应的规则解出来
          // 见下方案例
          // 需要理解一下「为什么相邻节点的坐标需要做 hash 运算存储」
          const x = val >> 16;
          const y = val & ((1 << 16) - 1);
          // 除已经设置防火墙的感染区域，相邻区域都要变为感染
          isInfected[x][y] = 1;
        }
      }
    }
    // 为什么这里退出条件是这样的
    if (neighbors.length === 1) {
      break;
    }
  }
  return ans;
};

const getHash = (x, y) => {
  return (x << 16) ^ y;
};

// 简单 hash 和 逆hash 运算
// const val = getHash(1, 4);
// console.log(val);
// const x = val >> 16;
// const y = val & ((1 << 16) - 1);
// console.log(x, y);

console.log(containVirus(testCase));
