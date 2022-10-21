const StockSpanner = function () {
  // 没有相同的值，可以用 Set 模拟
  this.stack = [];
  this.top = -1;
  this.ans = [];
};

/**
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function (price) {
  // 堆栈
  let curDay = 1;
  while (this.stack.length > 0 && this.stack[this.top][1] <= price) {
    const curTop = this.stack.pop();
    curDay += curTop[0];
    this.top--;
  }
  this.stack.push([curDay, price]);
  this.top++;
  return curDay;
};

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/
