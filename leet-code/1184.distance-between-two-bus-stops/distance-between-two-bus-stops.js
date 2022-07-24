/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
// const distanceBetweenBusStops = function (distance, start, destination) {
//   let forward = 0;
//   let backward = 0;
//   for (let i = start; i < destination; ++i) {
//     forward += distance[i];
//   }
//   for (let j = destination; j < distance.length; ++j) {
//     backward += distance[j];
//   }
//   return Math.min(forward, backward);
// };

// 解法错误，这种模拟方式，要考虑多种判断，才可以夸过数组的末尾进行路径的累加，而且无法处理 start > destination
// [7, 10, 1, 12, 11, 14, 5, 0];
// 7;
// console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));

// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。
// 我们已知每一对相邻公交站之间的距离
// distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

// 0 -> 1 = 7
// 1 -> 2 = 10
// 2 -> 3 = 1
// 3 -> 4 = 12
// 4 -> 5 = 11
// 5 -> 6 = 14
// 6 -> 7 = 5
// 7 -> 8 = 0

// 环线上的公交车都可以按顺时针和逆时针的方向行驶。

// 返回乘客从出发点 start 到目的地 destination 之间的最短距离。

// 加头尾指针，在路过边界时，重置
const distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  let head = start;
  let tail = destination;
  let forward = 0;
  let backward = 0;
  while (head !== destination) {
    forward += distance[head];
    head++;
    if (head === n) {
      head = 0;
    }
  }
  while (tail !== start) {
    backward += distance[tail];
    tail++;
    if (tail === n) {
      tail = 0;
    }
  }
  return Math.min(forward, backward);
};
