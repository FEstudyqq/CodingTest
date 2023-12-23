const fs = require('fs');

/**
 * @param {number[]} nums 
 */
function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const heights = input.split('\n').map(str => Number.parseInt(str, 10));

const sumOfWrongDwarvesHeight = sum(heights) - 100;

let source = [...heights];
source.sort((a, b) => a - b);

for (first of heights) {
  let flag = false;

  for (second of heights) {
    if (first + second === sumOfWrongDwarvesHeight) {
      if (first !== second) {
        source = source.filter(height => height !== first);
        source = source.filter(height => height !== second);
        flag = true;
        break;
      }
    }
  }

  if (flag) {
    break;
  }
}

source.forEach(height => console.log(height));