/**
 * @param {number[]} temp 
 * @param {number} num 
 */
function isValid(temp, num) {
  let result = true;
  
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] >= num) {
      result = false;
      break;
    }
  }

  return result;
}

/**
 * @param {number} N 
 * @param {number} M 
 * @param {number[]} sequence 
 * @param {number[]} result 
 * @param {number[]} temp 
 */
function backtrack(N, M, sequence, result, temp) {
  if (M === 0) {
    result.push(temp.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isValid(temp, sequence[i])) {
      temp.push(sequence[i]);
      backtrack(N, M - 1, sequence, result, temp);
      temp.pop();
    }
  }
}

/**
 * @param {number[][]} input 
 */
function solve(input) {
  input.forEach((sequence) => {
    const result = [];
    const temp = [];
    
    backtrack(sequence.length, 6, sequence, result, temp);

    console.log(`${result.join('\n')}\n`);
  });
}

const fs = require('fs');
const cases = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1);
const sequences = cases.map((arr) => arr.split(' ').slice(1).map((num) => Number.parseInt(num, 10)));

solve(sequences);