/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function (size) {
  this.slideWindow = [];
  this.maxWindowSize = size;
};

/**
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function (val) {
  if (this.slideWindow.length < this.maxWindowSize) {
    this.slideWindow.push(val);
  } else {
    this.slideWindow.shift();
    this.slideWindow.push(val);
  }
  return this.slideWindow.reduce((sum, curNum) => sum + curNum) / this.slideWindow.length;
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
