const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('\n').map(str => Number.parseInt(str, 10));

const sorted = [...numbers];
sorted.sort((a, b) => a - b);

console.log(sum(sorted) / 5);
console.log(sorted[2]);