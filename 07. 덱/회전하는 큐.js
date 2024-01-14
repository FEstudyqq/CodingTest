class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      const prevFront = this.front;
      prevFront.prev = node;

      this.front = node;
      node.next = prevFront;
    }

    this.size++;
  }

  shift() {
    if (this.isEmpty()) {
      return -1;
    }

    const value = this.front.data;

    if (this.size === 1) {
      this.front = null;
      this.rear = null;
      this.size = 0;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.size--;
    }

    return value;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      const prevRear = this.rear;
      prevRear.next = node;

      node.prev = prevRear;

      this.rear = node;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    const value = this.rear.data;

    if (this.size === 1) {
      this.front = null;
      this.rear = null;
      this.size = 0;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.size--;
    }

    return value;
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

  find(value) {
    let i = 0;
    let current = this.front;

    while (current !== null) {
      if (value === current.data) {
        break;
      } else {
        current = current.next;
        i++;
      }
    }

    return i;
  }

  asArray() {
    const result = [];

    let current = this.front;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}

const fs = require('fs');

const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = first.split(' ').map(str => Number.parseInt(str, 10));
const indices = second.split(' ').map(str => Number.parseInt(str, 10));

const deque = new Deque();

for (let i = 1; i <= N; i++) {
  deque.enqueue(i);
}

let result = 0;

indices.forEach(value => {
  while (deque.getFront() !== value) {
    if (deque.find(value) <= Math.floor(deque.size / 2)) {
      deque.enqueue(deque.shift());
    } else {
      deque.unshift(deque.dequeue());
    }

    result++;
  }

  deque.shift();
});

console.log(result);