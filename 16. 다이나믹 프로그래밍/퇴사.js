/**
 * @param {number[][]} consulting 
 * @param {number[]} memo 
 */
function solve(consulting, memo) {
  for (let i = 0; i < consulting.length; i += 1) {
    for (let j = i + consulting[i][0]; j <= consulting.length; j += 1) {
      if (memo[j] < memo[i] + consulting[i][1]) {
        memo[j] = memo[i] + consulting[i][1]
      }
    }
  } 

  return Math.max(...memo);
}

const fs = require('fs');
const [_first, ...last] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = last.map((line) => line.split(' ').map((num) => Number.parseInt(num, 10)));

const memo = Array.from(Array(input.length + 1)).map(() => 0);

console.log(solve(input, memo));

// 혼자 생각해낸 방법이 틀린 이유: 그리디한 접근 방법이었음
// 상담을 안 하고 넘어가는 날이 더 빠른 경우도 있는데
// 무조건 상담을 한 걸로 치고 인덱스를 넘겨버렸기 때문