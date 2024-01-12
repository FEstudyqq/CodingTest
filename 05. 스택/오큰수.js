const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

const monotone = [];
const result = Array.from({ length: N }).fill(-1);

numbers.forEach((currentNum, index) => {
  while (
    monotone.length > 0 &&
    monotone[monotone.length - 1].number < currentNum
  ) {
    const popped = monotone.pop();
    result[popped.index] = currentNum;
  }

  monotone.push({
    number: currentNum,
    index,
  });
});

console.log(result.join(' '));
