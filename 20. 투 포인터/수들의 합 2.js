const fs = require('fs');
const [[n, target], numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let l = 0;
let r = 0;
let answer = 0;
let sum = numbers[l];

while (r < n) {
  if (sum === target) answer += 1;

  if (l === r || sum <= target) {
    r += 1;
    sum += numbers[r];
  } else {
    sum -= numbers[l];
    l += 1;
  }
}

console.log(answer);
