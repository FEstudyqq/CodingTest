const fs = require('fs');
const [[N, M], numbers] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const sorted = numbers.sort((a, b) => Number(a) - Number(b));

const answer = [];
recurse([]);
console.log(answer.join('\n'));

function recurse(selected) {
  sorted.forEach((num) => {
    selected.push(num);

    if (selected.length === M) answer.push(selected.join(' '));
    else recurse(selected);

    selected.pop();
  });
}
