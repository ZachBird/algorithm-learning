/**
 * @param {number} num
 * @return {number}
 */
// 我们想找到左边第一个比右边某个大数小的，左边尽可能靠左，右边尽可能大且尽可能靠右。
// 单调递增栈，维护最大值
// 左边只要出现一个比右侧小的数，即为最左端点
// 通过单调栈维护右端点
const maximumSwap = function (num) {
  const numStrs = num.toString().split('');
  const n = numStrs.length;
  const stack = [];
  // 初始化左右端点
  let left = n;
  let right = n;
  for (let i = 0; i < n; ++i) {
    while (stack.length > 0 && numStrs[stack[stack.length - 1]] < numStrs[i]) {
      // 当前单调栈栈顶，意味着是到目前为止的最大值，遇到比栈顶大的元素，更新
      const curMaxIndex = stack.pop();
      // 确保左端点只更新一次，后续不再更新
      // 因为 index 是递增的，赋值一次过后，left 必不可能小于之前的 index
      if (curMaxIndex < left) {
        left = curMaxIndex;
        // 第一次出现右侧值比左侧值大，把当前值作为右端点
        right = i;
      }
      // 更新到当前右节点，也就是最大值时，更新右端点为更右端的值
      if (curMaxIndex === right) {
        right = i;
      }
    }
    // 如果遇到相同值，更新为更右端的端点
    if (right < n && numStrs[right] === numStrs[i]) {
      right = i;
    }
    stack.push(i);
  }
  // 如果左端点更新过
  if (left < n) {
    const temp = numStrs[left];
    numStrs[left] = numStrs[right];
    numStrs[right] = temp;
  }
  return numStrs.join('');
};

console.log(maximumSwap(2736));
