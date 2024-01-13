class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
    } else {
      this.rear.next = node;
    }

    this.rear = node;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    const current = this.front;
    this.front = current.next;
    this.size--;

    return current.data;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.front.data;
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.rear.data;
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const N = Number.parseInt(input, 10);

const queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.size > 1) {
  queue.dequeue();
  
  queue.enqueue(queue.dequeue());
}

console.log(queue.getFront());