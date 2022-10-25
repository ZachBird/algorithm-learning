const shortestBridge = function (grid) {
  const n = grid.length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const queue = [];
        dfs(i, j, grid, queue);
        let step = 0;
        while (queue.length !== 0) {
          const sz = queue.length;
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift();
            const x = cell[0];
            const y = cell[1];
            for (let d = 0; d < 4; d++) {
              const nx = x + dirs[d][0];
              const ny = y + dirs[d][1];
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  queue.push([nx, ny]);
                  grid[nx][ny] = -1;
                } else if (grid[nx][ny] === 1) {
                  return step;
                }
              }
            }
          }
          step++;
        }
      }
    }
  }
  return 0;
};

const dfs = (x, y, grid, queue) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[0].length ||
    grid[x][y] !== 1
  ) {
    return;
  }
  queue.push([x, y]);
  grid[x][y] = -1;
  dfs(x - 1, y, grid, queue);
  dfs(x + 1, y, grid, queue);
  dfs(x, y - 1, grid, queue);
  dfs(x, y + 1, grid, queue);
};
