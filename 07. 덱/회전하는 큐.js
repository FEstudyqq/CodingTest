const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const targets = input[1].split(' ').map(Number);

const dequeue = Array.from({ length: N }).map((_, i) => i + 1);
let cnt = 0;

targets.forEach((target) => {
  const index = dequeue.indexOf(target);
  if (index <= dequeue.length / 2) {
    // shift left
    const shifted = dequeue.splice(0, index);
    dequeue.splice(dequeue.length, 0, ...shifted);

    cnt += index;
  } else {
    // shift right
    const shifted = dequeue.splice(index);
    dequeue.splice(0, 0, ...shifted);

    cnt += dequeue.length - index;
  }

  dequeue.shift();
});

console.log(cnt);
