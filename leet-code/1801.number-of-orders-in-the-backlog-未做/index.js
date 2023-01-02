class Heap {
  constructor (compare, _values, _leaf) {
    if (typeof compare !== 'function') {
      throw new Error('Heap constructor expects a compare function');
    }
    this._compare = compare;
    this._nodes = Array.isArray(_values) ? _values : [];
    this._leaf = _leaf || null;
  }

  _hasLeftChild (parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }

  _hasRightChild (parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }

  _compareAt (i, j) {
    return this._compare(this._nodes[i], this._nodes[j]);
  }

  _swap (i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  _shouldSwap (parentIndex, childIndex) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false;
    }
    if (childIndex < 0 || childIndex >= this.size()) {
      return false;
    }
    return this._compareAt(parentIndex, childIndex) > 0;
  }

  _compareChildrenOf (parentIndex) {
    if (!this._hasLeftChild(parentIndex) && !this._hasRightChild(parentIndex)) {
      return -1;
    }
    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;
    if (!this._hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }
    if (!this._hasRightChild(parentIndex)) {
      return leftChildIndex;
    }
    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }

  _compareChildrenBefore (index, leftChildIndex, rightChildIndex) {
    const compare = this._compareAt(rightChildIndex, leftChildIndex);
    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }

  _heapifyUp (startIndex) {
    let childIndex = startIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  _heapifyDown (startIndex) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);
    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }

  _heapifyDownUntil (index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;
    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(index, leftChildIndex, rightChildIndex);
      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }
      parentIndex = childIndex;
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    }
  }

  insert (value) {
    this._nodes.push(value);
    this._heapifyUp(this.size() - 1);
    if (this._leaf === null || this._compare(value, this._leaf) > 0) {
      this._leaf = value;
    }
    return this;
  }

  push (value) {
    return this.insert(value);
  }

  extractRoot () {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);
    if (root === this._leaf) {
      this._leaf = this.root();
    }
    return root;
  }

  pop () {
    return this.extractRoot();
  }

  sort () {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._nodes;
  }

  fix () {
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i -= 1) {
      this._heapifyDown(i);
    }
    for (let i1 = Math.floor(this.size() / 2); i1 < this.size(); i1 += 1) {
      const value = this._nodes[i1];
      if (this._leaf === null || this._compare(value, this._leaf) > 0) {
        this._leaf = value;
      }
    }
    return this;
  }

  isValid () {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;
      if (this._hasLeftChild(parentIndex)) {
        const leftChildIndex = parentIndex * 2 + 1;
        if (this._compareAt(parentIndex, leftChildIndex) > 0) {
          return false;
        }
        isValidLeft = isValidRecursive(leftChildIndex);
      }
      if (this._hasRightChild(parentIndex)) {
        const rightChildIndex = parentIndex * 2 + 2;
        if (this._compareAt(parentIndex, rightChildIndex) > 0) {
          return false;
        }
        isValidRight = isValidRecursive(rightChildIndex);
      }
      return isValidLeft && isValidRight;
    };
    return isValidRecursive(0);
  }

  clone () {
    return new Heap(this._compare, this._nodes.slice(), this._leaf);
  }

  root () {
    if (this.isEmpty()) {
      return null;
    }
    return this._nodes[0];
  }

  top () {
    return this.root();
  }

  leaf () {
    return this._leaf;
  }

  size () {
    return this._nodes.length;
  }

  isEmpty () {
    return this.size() === 0;
  }

  clear () {
    this._nodes = [];
    this._leaf = null;
  }

  [Symbol.iterator] () {
    let size = this.size();
    return {
      next: () => {
        size -= 1;
        return {
          value: this.pop(),
          done: size === -1
        };
      }
    };
  }

  static heapify (values, compare) {
    if (!Array.isArray(values)) {
      throw new Error('Heap.heapify expects an array of values');
    }
    if (typeof compare !== 'function') {
      throw new Error('Heap.heapify expects a compare function');
    }
    return new Heap(compare, values).fix();
  }

  static isHeapified (values, compare) {
    return new Heap(compare, values).isValid();
  }
}
const Heap_1 = Heap;
function getNumberOfBacklogOrders (orders) {
  const MOD = 1000000007;
  const buyOrders = new Heap_1((a, b) => b[0] - a[0]);
  const sellOrders = new Heap_1((a, b) => a[0] - b[0]);
  for (const order of orders) {
    const [price, amount, orderType] = order;
    if (orderType === 0) {
      let count = amount;
      while (count > 0 && !sellOrders.isEmpty() && sellOrders.top()[0] <= price) {
        const sellOrder = sellOrders.pop();
        const sellAmount = Math.min(count, sellOrder[1]);
        count -= sellAmount;
        sellOrder[1] -= sellAmount;
        if (sellOrder[1] > 0) {
          sellOrders.push(sellOrder);
        }
      }
      if (count > 0) {
        buyOrders.push([
          price,
          count
        ]);
      }
    } else {
      let count1 = amount;
      while (count1 > 0 && !buyOrders.isEmpty() && buyOrders.top()[0] >= price) {
        const buyOrder = buyOrders.pop();
        const buyAmount = Math.min(count1, buyOrder[1]);
        count1 -= buyAmount;
        buyOrder[1] -= buyAmount;
        if (buyOrder[1] > 0) {
          buyOrders.push(buyOrder);
        }
      }
      if (count1 > 0) {
        sellOrders.push([
          price,
          count1
        ]);
      }
    }
  }
  let total = 0;
  for (const pq of [
    buyOrders,
    sellOrders
  ]) {
    for (const order1 of pq._nodes) {
      total = (total + order1[1]) % MOD;
    }
  }
  return total;
}
