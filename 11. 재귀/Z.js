const fs = require('fs');
const [N, r, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let visitNumber = 0;
findArea(1, r, c);

function findArea(depth, r, c) {
  if (depth > N) {
    console.log(visitNumber);
    return;
  }

  const half = 2 ** (N - depth);

  // 구역을 다음과 같이 네 개로 나누었을 때,
  // A B
  // C D

  // A 구역인 경우
  if (r < half && c < half) {
    visitNumber += 0;
    findArea(depth + 1, r, c);
  }
  // B 구역인 경우
  else if (r < half && half <= c) {
    visitNumber += half ** 2 * 1;
    findArea(depth + 1, r, c - half);
  }
  // C 구역인 경우
  else if (half <= r && c < half) {
    visitNumber += half ** 2 * 2;
    findArea(depth + 1, r - half, c);
  }
  // D 구역인 경우
  else if (half <= r && half <= c) {
    visitNumber += half ** 2 * 3;
    findArea(depth + 1, r - half, c - half);
  }
}
