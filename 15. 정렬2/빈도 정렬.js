const fs = require('fs');
const numbers = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')[1]
  .split(' ');

const map = new Map();

numbers.forEach((num) => {
  const cnt = map.get(num) ?? 0;
  map.set(num, cnt + 1);
});

const answer = [...map]
  .sort((a, b) => b[1] - a[1])
  .map(([num, cnt]) => Array(cnt).fill(num))
  .flat()
  .join(' ');

console.log(answer);
