const fs = require('fs');
const [n, ...numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .flatMap((line) => line.split(' '))
  .filter((num) => num); // 입력의 빈 줄이 0으로 변환되는 것을 방지

const reversed = numbers.map((num) => [...num].reverse().join('')).map(Number);
const sorted = reversed.sort((a, b) => a - b);
console.log(sorted.join('\n'));
