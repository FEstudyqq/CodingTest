const fs = require('fs');
const inputs = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, couponSushi] = inputs.shift().split(' ').map(Number);
const sushes = inputs.map(Number);

const counts = Array.from({ length: d + 1 }).fill(0);
counts[couponSushi]++; // 쿠폰 스시 미리 먹기
let cnt = 1; // 먹은 스시의 종류 수
let max = 0; // cnt 중 가장 큰 값. answer

// counts 초기화. 처음부터 k개만큼 순회
for (let i = 0; i < k; i++) {
  if (counts[sushes[i]] === 0) cnt++;
  counts[sushes[i]]++;
}

max = cnt;

for (let start = 0; start < N; start++) {
  counts[[sushes[start]]]--;
  if (counts[sushes[start]] === 0) cnt--;

  const end = (start + k) % N;

  if (counts[sushes[end]] === 0) cnt++;
  counts[[sushes[end]]]++;

  // max 업데이트
  if (max < cnt) max = cnt;
}

console.log(max);
