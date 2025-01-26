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
recurse(sorted, []);
console.log(answer.join('\n'));

function recurse(numbers, selected) {
  numbers.forEach((num, i) => {
    selected.push(num);

    if (selected.length === M) answer.push(selected.join(' '));
    else {
      const newNumbers = [...numbers];
      newNumbers.splice(i, 1);
      recurse(newNumbers, selected);
    }

    selected.pop();
  });
}
