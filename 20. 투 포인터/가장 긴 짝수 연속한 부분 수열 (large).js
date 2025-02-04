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
let maxLength = 0;

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

  // 홀수이고, 전체 수열에서 짝수보다 뒤에 있다면
  else if (removed.length > 0) {
    removed[removed.length - 1]++;
    totalRemoved++;
  }
}

console.log(maxLength);
