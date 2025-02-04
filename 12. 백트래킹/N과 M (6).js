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
  for (let idx = startIdx; idx < N; idx++) {
    selected.push(sorted[idx]);

    if (selected.length === M) answer.push(selected.join(' '));
    else recurse(idx + 1, selected);

    selected.pop();
  }
}
