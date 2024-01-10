/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function isArrayEqual(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

const fs = require('fs');

const [n, ...integers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(str => Number.parseInt(str, 10));

const source = [...Array(n).keys()].map(x => x + 1);
let index = 0;

const stack = [];
const destination = [];
const result = [];

for (i of integers) {
  while (source[index] <= i) {
    stack.push(source[index]);
    result.push('+');
    index++;
  }
  
  destination.push(stack.pop());
  result.push('-');
}

if (isArrayEqual(integers, destination)) {
  console.log(result.join('\n'));
} else {
  console.log('NO');
}