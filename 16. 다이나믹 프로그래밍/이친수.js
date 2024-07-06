/**
 * @param {number} N 
 */
function solve(N) {
  const memo = [...Array(N + 1)].map(() => -1);
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 1;

  /**
   * @param {number} N 
   */
  function dp(N) {
    if (memo[N] === -1) {
      memo[N] = BigInt(dp(N - 2)) + BigInt(dp(N - 1));
    }

    return memo[N];
  }

  return dp(N);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = Number.parseInt(input, 10);

const result = solve(N);

console.log(result.toString());