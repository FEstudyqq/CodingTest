const fs = require('fs');
let [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

N = Number(N);
const matrix = lines.map((line) => line.split(' '));
const cnt = { '-1': 0, 0: 0, 1: 0 };

solution(0, 0, N);
console.log(cnt[-1] + '\n' + cnt[0] + '\n' + cnt[1]);

function solution(startR, startC, n) {
  if (isEveryElementTheSame(startR, startC, n)) {
    cnt[matrix[startR][startC]]++;
  } else {
    for (let i = 0; i < n; i += n / 3) {
      for (let j = 0; j < n; j += n / 3) {
        solution(startR + i, startC + j, n / 3);
      }
    }
  }
}

function isEveryElementTheSame(startR, startC, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[startR + i][startC + j] !== matrix[startR][startC]) {
        return false;
      }
    }
  }
  return true;
}
