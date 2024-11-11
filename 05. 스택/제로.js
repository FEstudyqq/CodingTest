const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [k, ...write] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const result = [];

write.forEach((it) => (it === 0 ? result.pop() : result.push(it)));
console.log(result.reduce((sum, pre) => (sum += pre), 0));
