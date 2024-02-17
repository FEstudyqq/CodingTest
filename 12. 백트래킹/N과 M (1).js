const fs = require('fs');
const [n, m] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = [];

solution([], 0);
console.log(answer.join('\n'));

function solution(selected, depth) {
  if (depth === m) {
    answer.push(selected.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (selected.includes(i)) continue;
    solution([...selected, i], depth + 1);
  }
}
