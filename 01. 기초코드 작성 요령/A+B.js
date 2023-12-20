const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const input = fs.readFileSync('/dev/stdin').toString();
const nums = input.split(' ').map(str => Number.parseInt(str, 10));
const result = sum(nums);

console.log(result);