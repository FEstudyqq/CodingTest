const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, inputs] = fs.readFileSync(path).toString().trim().split('\n');

console.log(
  inputs
    .split('')
    .map(Number)
    .reduce((pre, cur) => pre + cur)
);
