const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const x = Number(input.pop());
const numbers = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => Number(a) - Number(b));

solution(x, numbers);

function solution(x, numbers) {
  let cnt = 0;
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === x) {
      cnt++;
      l++;
      r--;
      continue;
    }

    sum < x ? l++ : r--;
  }

  console.log(cnt);
}
