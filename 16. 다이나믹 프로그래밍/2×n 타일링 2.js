/**
 * @param {number} num 
 */
function solve(num) {
  const memo = [...Array(n + 1)].fill(-1);
  memo[1] = 1;
  memo[2] = 3;

  /**
   * @param {number} n 
   */
  function dp(n) {
    if (n < 3 || memo[n] !== -1) {
      return memo[n] % 10007;
    }

    memo[n] = dp(n - 1) + 2 * dp(n - 2);
    return memo[n];
  }

  dp(num);

  return memo[num];
}

const fs = require('fs');
const n = Number.parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

console.log(solve(n) % 10007);