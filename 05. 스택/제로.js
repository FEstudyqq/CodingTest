const fs = require('fs');
const [K, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stack = [];
input.forEach((num) => {
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
});

const sum = stack.reduce((sum, num) => sum + num, 0);
console.log(sum);
