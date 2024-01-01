const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((it) => Number(it));

const maxNum = input.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(maxNum + '\n' + (input.indexOf(maxNum) + 1));
