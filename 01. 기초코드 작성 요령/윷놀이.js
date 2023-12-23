const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * @param {number[]} combination 
 */
function result(combination) {
  const combinationSum = sum(combination);

  switch (combinationSum) {
    case 0:
      return 'D';
    case 1:
      return 'C';
    case 2:
      return 'B';
    case 3:
      return 'A';
    case 4:
      return 'E';
    default:
      throw Error('Invalid input');
  }
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');
const combinations = lines.map(line => line.split(' ').map(str => Number.parseInt(str, 10)));

const results = combinations.map(combination => result(combination));

for (res of results) {
  console.log(res);
}
