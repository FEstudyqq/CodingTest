// 백준 1780
// 참고 https://zidarn87.tistory.com/385

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [N, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const n = Number(N);
const input = inputs.map((it) => it.split(' '));

const answer = [0, 0, 0];

function checkPapar(x, y, n) {
  const target = input[x][y];

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (target !== input[i][j]) return false;
    }
  }
  return true;
}

function recursive(x, y, n) {
  if (checkPapar(x, y, n)) {
    answer[Number(input[x][y]) + 1]++;
    return;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      recursive(x + i * (n / 3), y + j * (n / 3), n / 3);
    }
  }
}

recursive(0, 0, n);

answer.forEach((it) => console.log(it));
