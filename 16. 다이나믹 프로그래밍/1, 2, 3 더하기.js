const fs = require('fs');
const [T, ...nums] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const memo = [-1, 1, 2, 4];

function getAnswer(n) {
  if (!memo[n])
    memo[n] = getAnswer(n - 1) + getAnswer(n - 2) + getAnswer(n - 3);
  return memo[n];
}

const answers = nums.map((n) => getAnswer(n));
console.log(answers.join('\n'));
