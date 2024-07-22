/**
 * @param {number} N 
 * @param {number[]} memo 
 */
function solve(N, memo) {
  if (memo[N] === 0) {
    memo[N] = solve(N - 2, memo) + solve(N - 3, memo);
  }
  
  return memo[N];
}

const fs = require('fs');
const [_first, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const sequence = input.map((num) => Number.parseInt(num, 10));

const memo = Array.from(Array(100 + 1)).map(() => 0);
memo[1] = 1;
memo[2] = 1;
memo[3] = 1;

console.log(sequence.map((N) => solve(N, memo)).join('\n'));