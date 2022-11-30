const FreqStack = function () {
  // 哈希表 + 栈 模拟题
  this.freqMap = new Map();
  this.countMap = new Map();
  this.maxFreq = 0;
};

/**
* @param {number} val
* @return {void}
*/
FreqStack.prototype.push = function (val) {
  if (this.countMap.has(val)) {
    this.countMap.set(val, this.countMap.get(val) + 1);
  } else {
    this.countMap.set(val, 1);
  }
  const curFreq = this.countMap.get(val);
  this.maxFreq = Math.max(this.maxFreq, curFreq);
  if (this.freqMap.has(curFreq)) {
    const curFreqStack = this.freqMap.get(curFreq);
    curFreqStack.push(val);
    this.freqMap.set(curFreq, curFreqStack);
  } else {
    this.freqMap.set(curFreq, [val]);
  }
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function () {
  const curFreqStack = this.freqMap.get(this.maxFreq);
  const topItem = curFreqStack.pop();
  this.countMap.set(topItem, this.countMap.get(topItem) - 1);
  this.freqMap.set(this.maxFreq, curFreqStack);
  if (!curFreqStack.length) {
    this.maxFreq--;
  }
  return topItem;
};

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/
