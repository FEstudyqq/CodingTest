const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

solution(N, input);

function solution(N, words) {
  const numbers = [];
  words.forEach((word) => {
    for (let num of word.split(/[a-z]/g)) {
      if (num === '') continue;

      if (Number(num) === 0) {
        numbers.push('0');
      } else {
        numbers.push(num.replace(/^0+/, ''));
      }
    }
  });

  const sorted = numbers.sort((a, b) => Number(a) - Number(b));
  console.log(sorted.join('\n'));
}
