const fs = require('fs');
const [N, ...commands] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const queue = [];
const output = [];
let start = 0; // 큐의 시작 인덱스

solution();

function solution() {
  commands.forEach((command) => {
    if (command === 'front') output.push(getFront());
    else if (command === 'back') output.push(getBack());
    else if (command === 'size') output.push(getSize());
    else if (command === 'empty') output.push(getStatus());
    else if (command === 'pop') output.push(pop());
    else push(command);
  });

  console.log(output.join('\n'));
}

function push(command) {
  queue.push(command.split(' ')[1]);
}

function pop() {
  let popped = -1;
  if (start < queue.length) {
    popped = queue[start];
    start++;
  }
  return popped;
}

function getStatus() {
  return queue.length > start ? 0 : 1;
}

function getSize() {
  let size = 0;
  if (queue.length >= start) {
    size = queue.length - start;
  }
  return size;
}

function getBack() {
  return getSize() > 0 ? queue[queue.length - 1] : -1;
}

function getFront() {
  return queue[start] ?? -1;
}
