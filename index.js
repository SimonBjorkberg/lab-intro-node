class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let total = 0;
    if (this.length > 0) {
      this.items.forEach((num) => {
        total += num
      });
    } else {
      return 0;
    }
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
