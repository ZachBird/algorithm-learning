/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function (size) {
  // 需要根据题意开定长数组
  this.slideWindow = [];
  this.maxWindowSize = size;
  this.head = 0;
  this.tail = 0;
  this.windowSum = 0;
};

/**
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function (val) {
  this.slideWindow.push(val);
  this.windowSum += this.slideWindow[this.tail];
  if (this.slideWindow.length > this.maxWindowSize) {
    this.windowSum -= this.slideWindow[this.head];
    this.head++;
  };
  this.tail++;
  // console.log(this.slideWindow, this.head, this.tail, this.windowSum);
  return this.windowSum / (this.tail - this.head);
};

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/
const obj = new MovingAverage(3);
console.log(obj.next(1));
console.log(obj.next(10));
console.log(obj.next(3));
console.log(obj.next(5));
// expect: [null,1.00000,5.50000,4.66667,6.00000]
