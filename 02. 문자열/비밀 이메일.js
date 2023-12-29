const fs = require('fs');

/**
 * @param {string} str 
 */
function indices(str) {
  const numbers = [...Array(str.length).keys()].map(x => x + 1);
  
  const divisors = numbers.filter(x => str.length % x === 0);
  const middle = Math.floor(divisors.length / 2);
  
  const row = divisors.length % 2 === 0 ? divisors[middle - 1] : divisors[middle];
  const column = divisors[middle];
  
  return {row, column};
}

/**
 * @param {string} str 
 * @param {number} count 
 */
function splitWithCount(str, count) {
  let result = [];

  for (let i = 0; i < str.length; i += count) {
    const len = i + count >= str.length ? str.length : i + count;
    result.push(input.slice(i, len).split(''));
  }

  return result;
}

/**
 * @param {string[][]} letters 
 * @param {{ row: number, column: number }} inputIndices 
 */
function decrypt(letters, inputIndices) {
  const result = [];

  for (let i = 0; i < inputIndices.row; i++) {
    const decrypted = [];

    for (let j = 0; j < inputIndices.column; j++) {
      decrypted.push(letters[j][i]);
    }
    
    result.push(decrypted.join(''));
  }
  
  return result.join('');
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const inputIndices = indices(input);
const letters = splitWithCount(input, inputIndices.row);

console.log(decrypt(letters, inputIndices));