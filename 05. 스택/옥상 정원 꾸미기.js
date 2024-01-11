const fs = require('fs');
const [N, ...heights] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stack = [];

const sum = heights.reduce((sum, h) => {
  while (stack[stack.length - 1] <= h) {
    stack.pop();
  }
  stack.push(h);
  return sum + stack.length - 1;
}, 0);

console.log(sum);
