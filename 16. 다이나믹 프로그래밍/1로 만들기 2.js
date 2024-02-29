const fs = require('fs');
const x = Number(fs.readFileSync('/dev/stdin').toString().trim());

const minMemo = [, 0, 1, 1]; // 최솟값
const nextIndex = [, 1, 1, 1]; // 최솟값을 얻기 위해 거쳐야 할 index

// min, nextIndex 구하기
for (let i = 4; i <= x; i++) {
  let min = minMemo[i - 1];
  let next = i - 1;

  if (i % 3 === 0 && min > minMemo[i / 3]) {
    min = minMemo[i / 3];
    next = i / 3;
  }

  if (i % 2 === 0 && min > minMemo[i / 2]) {
    min = minMemo[i / 2];
    next = i / 2;
  }

  minMemo[i] = 1 + min;
  nextIndex[i] = next;
}

// min을 구하기 위한 nextIndex 순서 얻기
const answer = [x];
for (let i = x; i !== 1; i = nextIndex[i]) {
  answer.push(nextIndex[i]);
}

// 정답 출력
console.log(minMemo[x]);
console.log(answer.join(' '));
