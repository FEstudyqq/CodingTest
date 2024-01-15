class Stack {
  constructor() {
    /**
     * @type {Array.<string>}
     */
    this.data = [];
    /**
     * @type {number}
     */
    this.top = -1;
  }

  isEmpty() {
    return this.top === -1;
  }

  /**
   * @param {string} value 
   */
  push(value) {
    this.top++;
    this.data[this.top] = value;
  }

  /**
   * @returns {string}
   */
  pop() {
    const value = this.data[this.top];
    delete this.data[this.top];
    this.top--;

    return value;
  }

  topValue() {
    return this.data[this.top];
  }
}

const fs = require('fs');

const [N, ...words] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;

for (const word of words) {
  if (word.length % 2 !== 0) {
    continue;
  }

  const first = new Stack();
  const second = new Stack();

  word.split('').forEach(letter => { first.push(letter) });

  while (!first.isEmpty()) {
    if (!second.isEmpty()) {
      if (first.topValue() === second.topValue()) {
        first.pop();
        second.pop();
      } else {
        second.push(first.pop());
      }
    } else {
      second.push(first.pop());
    }

    if (first.isEmpty() && second.isEmpty()) {
      result++;
    }
  }
}

console.log(result);