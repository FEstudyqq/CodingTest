const fs = require('fs');
const [start, end] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const pushed = new Node(data);
    if (!this.head) this.head = pushed;
    if (this.tail) this.tail.next = pushed;
    this.tail = pushed;
    this.length += 1;
  }

  shift() {
    if (!this.head) return null;
    const shifted = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return shifted.data;
  }
}

function bfs() {
  const queue = new Queue();
  const visited = new Set();
  queue.push([start, 0]);
  visited.add(start);

  while (queue.length > 0) {
    const [current, depth] = queue.shift();

    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next > 100000) continue;
      if (next === end) return depth + 1;
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, depth + 1]);
      }
    }
  }
}

function solution() {
  if (start >= end) return start - end;
  return bfs();
}

console.log(solution());
