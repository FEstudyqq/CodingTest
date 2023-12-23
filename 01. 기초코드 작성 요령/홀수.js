const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('\n').map(str => Number.parseInt(str, 10));
const odds = numbers.filter(num => num % 2 === 1);

const oddSorted = [...odds];
oddSorted.sort((a, b) => a - b);

if (oddSorted.length === 0) {
  console.log(-1);
} else {
  console.log(sum(oddSorted));
  console.log(oddSorted[0]);
}