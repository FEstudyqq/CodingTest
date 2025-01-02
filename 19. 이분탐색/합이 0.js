const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const size = Number(input[0]);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => Number(a) - Number(b));

let count = 0;

for (let i = 0; i < size - 2; i++) {
  for (let j = i + 1; j < size - 1; j++) {
    const target = -1 * (numbers[i] + numbers[j]); // 찾으려는 값

    const lowerBoundIdx = lowerBound(j + 1, size, target);
    const upperBoundIdx = upperBound(j + 1, size, target);

    if (target === numbers[lowerBoundIdx]) {
      count += upperBoundIdx - lowerBoundIdx - 1;
    }
  }
}

function lowerBound(l, r, target) {
  let m;

  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (target > numbers[m]) l = m + 1;
    else r = m;
  }

  return l;
}

function upperBound(l, r, target) {
  let m;

  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (target >= numbers[m]) l = m + 1;
    else r = m;
  }

  return r + 1;
}

console.log(count);

/**
 * 참고한 글
 * https://codingnotes.tistory.com/177
 * https://12bme.tistory.com/120
 */
