/**
 * @param {number} N 
 * @param {number[]} dp 
 * @param {number[][]} printed
 */
function fibonacci(N, dp, printed) {
  if (dp[N] !== -1) {
    return dp[N];
  }

  if (N === 0) {
    dp[0] = 0;
    
    return dp[0];
  }

  if (N === 1) {
    dp[1] = 1;
    
    return dp[1];
  }

  dp[N] = fibonacci(N - 2, dp, printed) + fibonacci(N - 1, dp, printed);
  printed[N] = [
    printed[N - 2][0] + printed[N - 1][0],
    printed[N - 2][1] + printed[N - 1][1],
  ]

  return dp[N];
}

const fs = require('fs');

const [, ...tail] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = tail.map(N => Number.parseInt(N, 10));

const printed = Array(40 + 1).fill([-1, -1]);

printed[1] = [0, 1];
printed[0] = [1, 0];

for (let i = 0; i < testCase.length; i += 1) {
  const dp = Array(40 + 1).fill(-1);
  
  fibonacci(testCase[i], dp, printed);
}

const result = [];

testCase.forEach(test => result.push(printed[test].join(' ')));

console.log(result.join('\n'));