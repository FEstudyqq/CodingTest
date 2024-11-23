const fs = require('fs');
const [, A, B] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const difference = new Set(A);
B.forEach((num) => {
  difference.delete(num);
});

console.log(difference.size);
if (difference.size !== 0) {
  console.log([...difference].sort((a, b) => a - b).join(' '));
}
