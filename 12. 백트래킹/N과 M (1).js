/**
 * @param {number} M 
 * @param {number} N 
 * @param {number[]} result 
 * @param {number[]} temp 
 */
function backtrack(M, N, result, temp) {
  if (M === 0) {
    result.push(temp.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!temp.includes(i)) {
      temp.push(i);
      backtrack(M - 1, N, result, temp);
      temp.pop();
    }
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(str => Number.parseInt(str, 10));

/**
 * @type {number[]}
 */
const result = [];
/**
 * @type {number[]}
 */
const temp = [];

backtrack(M, N, result, temp);

console.log(result.join('\n'));