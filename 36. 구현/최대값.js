const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '))
  .flat()
  .map(Number);

const max = Math.max(...inputs);
const idx = inputs.indexOf(max);
console.log(max);
console.log(Math.floor(idx / 9) + 1, (idx % 9) + 1);
