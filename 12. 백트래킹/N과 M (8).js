const fs = require('fs');
const [[N, M], numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const sorted = numbers.sort((a, b) => Number(a) - Number(b));

const answer = [];
recurse(0, []);
console.log(answer.join('\n'));

function recurse(startIdx, selected) {
  for (let i = startIdx; i < N; i++) {
    selected.push(sorted[i]);

    if (selected.length === M) answer.push(selected.join(' '));
    else recurse(i, selected);

    selected.pop();
  }
}
