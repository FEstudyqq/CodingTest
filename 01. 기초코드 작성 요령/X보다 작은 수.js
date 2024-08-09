const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const [_, x] = inputs[0].split(' ').map(Number);
const a = inputs[1]
  .split(' ')
  .map(Number)
  .filter((it) => it < x);

console.log(...a);
