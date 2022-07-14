/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  // 本来想的暴力枚举，存一个最大值，去和前面推入队列的比较
  // 看了一眼题解的关键字，「栈模拟」，放弃原来那个思路
  const stack = [];
  for (const ats of asteroids) {
    // 边界条件想不清楚，看题解
    // 标记当前行星是否被摧毁
    let exist = true;
    // 条件说明
    // stack[stack.length - 1] > 0 && ats < 0
    // 是因为如果栈顶为负，是永远不会和后入栈的正值相撞的。因为行星移动是单向的（所以栈空时负值也不会入栈）
    // eslint-disable-next-line no-unmodified-loop-condition
    while (exist && stack.length && stack[stack.length - 1] > 0 && ats < 0) {
      const stackPeak = stack[stack.length - 1];
      const curAts = -ats;
      if (stackPeak <= curAts) stack.pop();
      if (stackPeak >= curAts) exist = false;
    }
    if (exist) stack.push(ats);
  }
  return stack;
};

console.log(asteroidCollision([8, -8]));
