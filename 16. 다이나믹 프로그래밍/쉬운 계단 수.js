/**
 * @param {number} N 
 */
function solve(N) {
  const memo = Array.from(Array(N + 1)).map(
    () => Array.from(Array(10)).map(() => 0)
  );

  for (let i = 0; i < 9; i += 1) {
    memo[1][i] = 1;
  }

  for (let i = 2; i <= N; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (j === 0) {
        memo[i][j] += memo[i - 1][1];
      } else if (j === 9) {
        memo[i][j] += memo[i - 1][8];
      } else {
        memo[i][j] += memo[i - 1][j - 1] + memo[i - 1][j + 1];
      }

      memo[i][j] %= 1_000_000_000;
    }
  }

  return memo[N].reduce((prev, current) => prev + current, 0);
}

const fs = require('fs');
const input = Number.parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

console.log(solve(input) % 1_000_000_000);