class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /**
   * @param {number} N 
   */
  constructor() {
    this.head = null;
    this.cursor = null;
    this.length = 0;
    this.result = [];
  }

  /**
   * @param {number} value 
   */
  add(value) {
    if (this.length === 0) {
      this.head = new LinkNode(value);
      this.cursor = this.head;
      this.length++;
      return;
    }

    this.cursor.next = new LinkNode(value);
    this.cursor = this.cursor.next;
    this.length++;
  }

  /**
   * @param {number} N 
   */
  make(N) {
    for (let i = 1; i <= N; i++) {
      this.add(i);
    }

    this.cursor.next = this.head;
  }

  /**
   * 
   * @param {number} K 
   */
  remove(K) {
    let current = this.cursor;
    let prev = null;
      
    while (this.length > 0) {
      for (let i = 0; i < K; i++) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      this.length--;

      this.result.push(current.value);
    }
  }
}

const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(str => Number.parseInt(str, 10));

const list = new LinkedList();
list.make(N);
list.remove(K);

console.log(`<${list.result.join(', ')}>`);
