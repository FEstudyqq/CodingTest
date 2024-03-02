const fs = require('fs');
const [N, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const times = lines
  .map((line) => line.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

let cnt = 0;
let pickedEnd = 0;

for (let [start, end] of times) {
  if (start >= pickedEnd) {
    pickedEnd = end;
    cnt += 1;
  }
}

console.log(cnt);
