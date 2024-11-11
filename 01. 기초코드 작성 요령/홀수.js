const fs = require('fs');
let min = 100;

const input = fs
  .readFileSync('Wiki\\input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const answer = input.reduce((pre, cur) => {
  if (cur % 2) {
    min = min < cur ? min : cur;
    return pre + cur;
  }
  return pre;
}, 0);

if (answer) {
  console.log(answer);
  console.log(min);
} else {
  console.log(-1);
}
