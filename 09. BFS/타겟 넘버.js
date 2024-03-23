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

function bfs(numbers, target) {
  let result = 0;

  // const queue = [0];
  const queue = new Queue();
  queue.enqueue(0);

  let length = 1;
  let index = 0;

  while (queue.size !== 0) {
    const sum = queue.dequeue();
    
    if (index < numbers.length) {
      queue.enqueue(sum + numbers[index]);
      queue.enqueue(sum - numbers[index]);  
    } else {
      if (sum === target) {
        result += 1;
      }
    }

    if (queue.size === 2 * length) {
      index += 1;
      length *= 2;
    }
  }

  return result;
}

function solution(numbers, target) {
  return bfs(numbers, target);
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target));