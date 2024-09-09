const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .slice(1)
  .sort((a, b) => a - b);

inputs.forEach((it) => console.log(it));
