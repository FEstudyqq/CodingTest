const fs = require('fs');
const [[N, K], numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let start = 0;
let end = 0;
const hash = {};
let maxLength = 0;

while (end < N) {
  const cur = numbers[end];

  if (!hash[cur]) hash[cur] = 1;
  else hash[cur] += 1;

  while (hash[cur] > K) {
    hash[numbers[start]] -= 1;
    start++;
  }

  end++;
  if (start > end) end = start;
  maxLength = Math.max(maxLength, end - start);
}

console.log(maxLength);
