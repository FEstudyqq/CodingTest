const fs = require('fs');
const cases = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

cases.pop();

const answers = cases.map(([l, p, v], idx) => {
  let m = l * Math.floor(v / p);
  let n = v % p <= l ? v % p : l;

  return `Case ${idx + 1}: ${m + n}`;
});

console.log(answers.join('\n'));
