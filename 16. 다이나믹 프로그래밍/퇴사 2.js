/**
 * @param {number[][]} consulting 
 */
function solve(consulting) {
  const memo = Array.from(Array(input.length + 1)).map(() => 0);

  let result = 0;

  // 모든 날에 대해
  for (let i = 0; i < consulting.length; i += 1) {
    result = Math.max(result, memo[i])

    const next = i + consulting[i][0];

    if (next <= consulting.length) {
      // 오늘 상담하는 경우 vs. 안 하는 경우
      memo[next] = Math.max(result + consulting[i][1], memo[next]);
    }
  }  

  return Math.max(...memo);
}

const fs = require('fs');
const [_first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = last.map((line) => line.split(' ').map((num) => Number.parseInt(num, 10)));

console.log(solve(input));