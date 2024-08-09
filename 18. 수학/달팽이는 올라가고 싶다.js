const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b, v] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.ceil((v - b) / (a - b)));
