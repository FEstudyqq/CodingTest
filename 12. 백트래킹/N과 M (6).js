/**
 * 
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
  
  const fs = require('fs');
  
  const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = first.split(' ').map(str => Number.parseInt(str, 10));
  const sequence = second.split(' ').map(str => Number.parseInt(str, 10));
  sequence.sort((a, b) => a - b);
  
  /**
   * @type {number[]}
   */
  const result = [];
  /**
   * @type {number[]}
   */
  const temp = [];
  
  backtrack(N, M, sequence, result, temp);
  
  console.log(result.join('\n'));