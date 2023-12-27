const fs = require('fs');
const input = fs
  .readFileSync('Wiki\\input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const total = input.reduce((pre, cur) => pre + cur) - 100;

for (let i = 0; i < 9; i++) {
  const target = total - input[i];

  if (input.includes(target) && target !== input[i]) {
    const answer = input.filter((it) => it !== target && it !== input[i]);
    answer.sort((a, b) => a - b);
    console.log(...answer);
    return;
  }
}
