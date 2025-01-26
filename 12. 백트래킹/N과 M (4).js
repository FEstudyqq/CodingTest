const fs = require('fs');
const [N, M] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = [];

function recurse(start, sequence) {
  for (let i = start; i <= N; i++) {
    sequence.push(i);

    if (sequence.length === M) {
      answer.push(sequence.join(' '));
    } else {
      recurse(i, sequence);
    }

    sequence.pop();
  }
}
recurse(1, []);
console.log(answer.join('\n'));
