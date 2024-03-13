/**
 * @param {number} N 
 * @param {number[]} dp 
 */
function solve(N, dp) {
  if (dp[N] !== -1) {
    return dp[N];
  }

  if (N === 2 || N === 3) {
    dp[N] = 1;
    return dp[N];
  }

  if (N % 6 === 0) {
    dp[N] = Math.min(solve(N / 3, dp), solve(N / 2, dp), solve(N - 1, dp)) + 1;
    return dp[N];
  }

  if (N % 3 === 0) {
    dp[N] = Math.min(solve(N / 3, dp), solve(N - 1, dp)) + 1;
    return dp[N];
  }

  if (N % 2 === 0) {
    dp[N] = Math.min(solve(N / 2, dp), solve(N - 1, dp)) + 1;
    return dp[N];
  }

  dp[N] = solve(N - 1, dp) + 1;
  return dp[N];
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const N = Number.parseInt(input, 10);

const dp = Array(N + 1).fill(-1);
dp[1] = 0;

const result = solve(N, dp);

console.log(result);