/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
  const adj = new Array(n).fill(0).map(() => new Array(0));
  for (const edge of edges) {
    const x = edge[0]; const y = edge[1];
    adj[x].push(y);
    adj[y].push(x);
  }
  const visited = new Array(n).fill(false);
  const queue = [source];
  visited[source] = true;
  while (queue.length) {
    const vertex = queue.shift();
    if (vertex === destination) break;
    for (const dst of adj[vertex]) {
      if (!visited[dst]) {
        queue.push(dst);
        visited[dst] = true;
      }
    }
  }
  return visited[destination];
};
