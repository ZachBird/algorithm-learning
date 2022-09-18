// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// 几个题解结合起来用标记岛屿 + 合并的方法解
// 并查集解法：https://leetcode.cn/problems/making-a-large-island/solution/by-ac_oier-1kmp/
const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]]; // 用来快速定方向的数组
const largestIsland = function (grid) {
  const iSize = grid.length;
  const iAreaMap = new Map();
  let iSign = 2; // 从 2 开始标记岛屿，与 1 和 0 分开
  let ans = 0;
  // 遍历岛屿格子
  for (let i = 0; i < iSize; ++i) {
    for (let j = 0; j < iSize; ++j) {
      if (grid[i][j] === 1) {
        const curIslandArea = calcAreas(grid, i, j, iSign);
        iAreaMap.set(iSign, curIslandArea);
        ans = Math.max(ans, curIslandArea);
        iSign++;
      }
    }
  }
  // 如果没有 岛屿 最大添加一个格子，为 1
  if (iAreaMap.size === 0) return 1;
  // 遍历海洋格子
  for (let i = 0; i < iSize; ++i) {
    for (let j = 0; j < iSize; ++j) {
      if (grid[i][j] === 0) {
        let connectedAreas = 1;
        // 防止有岛屿包裹某个海洋格子，就会重复累加面积
        const connSet = new Set();
        for (const dir of dirs) {
          const x1 = i + dir[0];
          const y1 = j + dir[1];
          if (!valid(iSize, x1, y1) || grid[x1][y1] === 0 || connSet.has(grid[x1][y1])) continue;
          const curSign = grid[x1][y1];
          connectedAreas += iAreaMap.get(curSign);
          connSet.add(curSign);
        }
        ans = Math.max(ans, connectedAreas);
      }
    }
  }
  return ans;
};

const calcAreas = function (grid, x, y, sign) {
  const iSize = grid.length;
  let ans = 1;
  grid[x][y] = sign;
  for (const dir of dirs) {
    const x1 = x + dir[0];
    const y1 = y + dir[1];
    if (valid(iSize, x1, y1) && grid[x1][y1] === 1) {
      ans += calcAreas(grid, x1, y1, sign);
    }
  }
  return ans;
};

const valid = function (iSize, x, y) {
  return x >= 0 && x < iSize && y >= 0 && y < iSize;
};

console.log(largestIsland([[0, 0], [0, 0]]));
