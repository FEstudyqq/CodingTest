const fs = require('fs');
const [, ...universe] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

function compress(coordinates) {
  const set = new Set(coordinates);
  const sorted = [...set].sort((a, b) => a - b);

  const obj = {}; // key(원래 원소): value(압축한 좌표)
  sorted.forEach((value, idx) => (obj[value] = idx));

  return coordinates.map((value) => obj[value]);
}

let answer = 0;
const obj = {}; // key(압축 결과): value(개수)
universe.forEach((planets) => {
  const result = compress(planets).join(' ');
  if (obj[result]) {
    answer += obj[result];
    obj[result] += 1;
  } else {
    obj[result] = 1;
  }
});

console.log(answer);
