const fs = require('fs');
const [N, M] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = [];
recurse([]);
console.log(answer.join('\n'));

function recurse(selected) {
  for (let num = 1; num <= N; num++) {
    selected.push(num);

    if (selected.length === M) {
      answer.push(selected.join(' '));
    } else {
      recurse(selected);
    }

    selected.pop();
  }
}
