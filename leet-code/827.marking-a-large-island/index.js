// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

// 几个题解结合起来用标记岛屿 + 合并的方法解
// 并查集解法：https://leetcode.cn/problems/making-a-large-island/solution/by-ac_oier-1kmp/
const dirs = [[0, 1], [0, -1], [-1, 0], [0, -1]]; // 用来快速定方向的数组
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
  if (iAreaMap.size === 0) return 0;
  // 遍历海洋格子
  for (let i = 0; i < iSize; ++i) {
    for (let j = 0; j < iSize; ++j) {
      if (grid[i][j] === 0) {
        let connectedAreas = 1;
        for (const dir of dirs) {
          const x1 = i + dir[0];
          const y1 = j + dir[1];
          if (!valid(iSize, x1, y1) || grid[x1][y1] === 0) continue;
          connectedAreas += iAreaMap.get(grid[x1][y1]);
        }
        ans = Math.max(ans, connectedAreas);
      }
    }
  }
  return ans;
};

const calcAreas = function (grid, x, y, sign) {
  const iSize = grid.length;
  let ans = 0;
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

// const d = [0, -1, 0, 1, 0];
// const largestIsland = function (grid) {
//   const n = grid.length; let res = 0;
//   const tag = new Array(n).fill(0).map(() => new Array(n).fill(0));
//   const area = new Map();
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === 1 && tag[i][j] === 0) {
//         const t = i * n + j + 1;
//         area.set(t, dfs(grid, i, j, tag, t));
//         res = Math.max(res, area.get(t));
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === 0) {
//         let z = 1;
//         const connected = new Set();
//         for (let k = 0; k < 4; k++) {
//           const x = i + d[k]; const y = j + d[k + 1];
//           if (!valid(n, x, y) || tag[x][y] === 0 || connected.has(tag[x][y])) {
//             continue;
//           }
//           z += area.get(tag[x][y]);
//           connected.add(tag[x][y]);
//         }
//         res = Math.max(res, z);
//       }
//     }
//   }
//   return res;
// };

// const dfs = (grid, x, y, tag, t) => {
//   const n = grid.length; let res = 1;
//   tag[x][y] = t;
//   for (let i = 0; i < 4; i++) {
//     const x1 = x + d[i]; const y1 = y + d[i + 1];
//     if (valid(n, x1, y1) && grid[x1][y1] === 1 && tag[x1][y1] === 0) {
//       res += dfs(grid, x1, y1, tag, t);
//     }
//   }
//   return res;
// };

// const valid = (n, x, y) => {
//   return x >= 0 && x < n && y >= 0 && y < n;
// };
