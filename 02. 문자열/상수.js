const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((it) => it.split('').reverse().join(''));
console.log(a > b ? a : b);
