/**
 * @param {number[][]} triangle 
 */
function dp(triangle) {
  const memo = triangle.map((line) => line.map(() => 0));
  memo[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (j === 0) {
        memo[i][j] = triangle[i][j] + memo[i - 1][j];
        continue;
      }
      
      if (j === i) {
        memo[i][i] = triangle[i][j] += memo[i - 1][j - 1];
        continue;
      }
      
      memo[i][j] = triangle[i][j] + Math.max(memo[i - 1][j - 1], memo[i - 1][j]);
    }
  }

  return Math.max(...memo[triangle.length - 1]);
}

const fs = require('fs');
const [_n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const triangle = input.map((line) => line.split(' ').map((num) => Number.parseInt(num, 10)));

console.log(dp(triangle));