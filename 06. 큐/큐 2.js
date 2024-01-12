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

const [N, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const queue = new Queue(N);

const result = [];

for (const command of commands) {
  if (command.includes(' ')) {
    const [_, num] = command.split(' ');
    queue.enqueue(Number.parseInt(num, 10));
  } else {
    switch (command) {
      case 'front': {
        result.push(queue.getFront());
        break;
      }
      case 'back': {
        result.push(queue.getBack());
        break;
      }
      case 'size': {
        result.push(queue.size);
        break;
      }
      case 'empty': {
        result.push(queue.isEmpty() ? 1 : 0);
        break;
      }
      default:
        result.push(queue.dequeue());
    }
  }
}

console.log(result.join('\n'));