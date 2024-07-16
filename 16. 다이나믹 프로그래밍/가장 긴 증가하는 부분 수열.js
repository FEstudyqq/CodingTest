/**
 * @param {number[]} sequence 
 */
function solve(sequence) {
  const memo = sequence.map(() => 0);

  for (let i = 0; i < sequence.length; i += 1) {
    memo[i] = 1;

    for (let j = 0; j < i; j += 1) {
      if (sequence[j] < sequence[i]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }

  return Math.max(...memo);
}

const fs = require('fs');
const [_first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sequence = second.split(' ').map((num) => Number.parseInt(num, 10));

console.log(solve(sequence));