const fs = require('fs');
const [[N, K], numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let start = 0;
let totalRemoved = 0;
const removed = [];
let maxLength = 0; // answer

for (let i = 0; i < N; i++) {
  // 짝수면
  if (numbers[i] % 2 === 0) {
    removed.push(0);

    if (totalRemoved <= K) {
      maxLength++;
    } else {
      totalRemoved -= removed[start];
      start++;
    }
  }
  // 짝수 뒤에 나오는 홀수면
  else if (removed.length > 0) {
    removed[removed.length - 1]++;
    totalRemoved++;
  }
}

console.log(maxLength);
