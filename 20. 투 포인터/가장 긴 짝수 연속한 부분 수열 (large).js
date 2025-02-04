// 수열 S에서 짝수를 찾는다
// 그 다음 짝수를 찾는다 (반복)
// 이 때 짝수 간 거리가 K 보다 작거나 같아야 함
// 수열에서 짝수 뒤에 홀수가 몇 개 오는지 기록
// if (짝수) 다음 짝수 찾기 & 연속한 짝수 길이 기록
// if (홀수 & 지운 홀수가 K보다 크면) 맨 앞 짝수의 다음 짝수부터 부분 수열을 만듦

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
