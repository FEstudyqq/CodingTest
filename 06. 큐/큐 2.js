const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let head = 0;
let tail = 0;
const queue = Array(2000000);

const operations = {
  push: x => {
    queue[tail++] = x;
  },
  pop: () => (head === tail ? -1 : queue[head++]),
  size: () => tail - head,
  empty: () => (head === tail ? 1 : 0),
  front: () => (head === tail ? -1 : queue[head]),
  back: () => (head === tail ? -1 : queue[tail - 1]),
};

const result = [];

for (let i = 1; i < input.length; i++) {
  const [cmd, value] = input[i].split(' ');
  const output = operations[cmd](Number(value));
  if (output !== undefined) {
    result.push(output);
  }
}

console.log(result.join('\n'));
