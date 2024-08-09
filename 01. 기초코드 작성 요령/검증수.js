const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const num = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((it) => Number(it) ** 2)
  .reduce((pre, cur) => pre + cur);

console.log(num % 10);
