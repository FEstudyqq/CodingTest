/**
 * @param {string} roomNumber 
 * @returns {number[]}
 */
function numberFrequency(roomNumber) {
  const result = new Array(10);

  const numbers = roomNumber.split('').map(str => Number.parseInt(str, 10));
  
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  numbers.forEach(num => result[num]++);

  return result;
}

const fs = require('fs');
const roomNumber = fs.readFileSync('/dev/stdin').toString();

const frequency = numberFrequency(roomNumber);

frequency[6] += frequency[9];
frequency[9] = 0;

const half = Math.floor(frequency[6] / 2)

frequency[6] = frequency[6] % 2 === 0 ? half : half + 1;

const max = Math.max(...frequency);

console.log(max);