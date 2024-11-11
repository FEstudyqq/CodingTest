const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, k] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((it) => Number(it));

const arr = Array.from({ length: n }, (_, i) => i + 1);
const result = [];

while (result.length !== n) {
  let count = 0;
  while (count < k - 1) {
    arr.push(arr.shift());
    count += 1;
  }
  result.push(arr.shift());
}

console.log('<' + result.join(', ') + '>');
