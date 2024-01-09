/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const fs = require('fs');

const [K, ...integers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(str => Number.parseInt(str, 10));

const result = [];

integers.forEach(integer => {
  if (integer === 0) {
    result.pop();
  } else {
    result.push(integer);
  }
});

console.log(sum(result));