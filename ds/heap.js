class PriorityQueue {
  heap = [];
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.heap.length;
  }

  /**
   * returns the head element
   */
  peek() {
    return this.heap.length ? this.heap[0] : undefined;
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.heap.push(element);
    if (this.heap.length > 1) this.bubbleUp(this.heap.length - 1);
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    if (this.heap.length) {
      const val = this.heap[0];
      if (this.heap.length === 1) {
        this.heap.length = 0;
      } else {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length -= 1;
        if (this.heap.length > 1) this.bubbleDown(0);
      }
      return val;
    }
  }

  bubbleDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    const leftSwappable = this.compare(this.heap[index], this.heap[left]) > 0;

    if (right >= this.heap.length) {
      if (leftSwappable) {
        [this.heap[index], this.heap[left]] = [
          this.heap[left],
          this.heap[index],
        ];
      }
      return;
    }

    const rightSwappable = this.compare(this.heap[index], this.heap[right]) > 0;

    if (leftSwappable && rightSwappable) {
      const comparison = this.compare(this.heap[left], this.heap[right]);
      if (comparison < 0) {
        [this.heap[index], this.heap[left]] = [
          this.heap[left],
          this.heap[index],
        ];
        this.bubbleDown(left);
      } else {
        [this.heap[index], this.heap[right]] = [
          this.heap[right],
          this.heap[index],
        ];
        this.bubbleDown(right);
      }
    } else {
      if (leftSwappable) {
        [this.heap[index], this.heap[left]] = [
          this.heap[left],
          this.heap[index],
        ];
        this.bubbleDown(left);
      } else {
        [this.heap[index], this.heap[right]] = [
          this.heap[right],
          this.heap[index],
        ];
        this.bubbleDown(right);
      }
    }
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.compare(this.heap[parent], this.heap[index]) > 0) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      this.bubbleUp(parent);
    }
  }
}

module.exports = PriorityQueue;
