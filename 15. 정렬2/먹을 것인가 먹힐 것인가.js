const fs = require('fs');

const [head, ...tail] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number.parseInt(head, 10);

const testCases = [];

/**
 * @param {number[]} nums 
 */
function ascending(nums) {
  const result = [...nums];

  result.sort((a, b) => a - b);

  return result;
}

/**
 * @param {number[]} nums 
 */
function descending(nums) {
  const result = [...nums];

  result.sort((a, b) => b - a);

  return result;
}

/**
 * @param {number[]} A 
 * @param {number[]} B 
 */
function process(A, B) {
  const sortedA = descending(A);
  const sortedB = ascending(B);

  let result = 0;

  for (let i = 0; i < sortedA.length; i++) {
    for (let j = 0; j < sortedB.length; j++) {
      if (sortedA[i] <= sortedB[j]) {
        break;
      }

      result += 1;
    }
  }

  return result;
}

for (let i = 0; i < tail.length; i += 3) {
  testCases.push(tail.slice(i + 1, i + 3).map(str => {
    return str.split(' ').map(num => Number.parseInt(num, 10));
  }));
}

const result = testCases.map(([A, B]) => process(A, B)).join('\n');

console.log(result);
