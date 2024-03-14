const fs = require('fs');
const [T, ...numbers] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const memo = [
  [1, 0],
  [0, 1],
];

const answers = numbers.map((N) => fib(N).join(' '));
console.log(answers.join('\n'));

function fib(n) {
  if (memo[n]) return memo[n];
  fib(n - 1);

  const cntZero = memo[n - 2][0] + memo[n - 1][0];
  const cntOne = memo[n - 2][1] + memo[n - 1][1];
  memo[n] = [cntZero, cntOne];
  return memo[n];
}
