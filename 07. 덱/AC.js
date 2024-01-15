const fs = require('fs');

const [T, ...tests] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const cases = tests.reduce((accumulator, _, currentIndex) => {
  return currentIndex % 3 === 0 ? accumulator.concat([tests.slice(currentIndex, currentIndex + 3)]) : accumulator;
}, []);

const testCases = cases.map(value => {
  const nums = value[2].slice(1, value[2].length - 1).split(',').map(str => Number.parseInt(str, 10)).filter(num => !Number.isNaN(num));

  return [value[0].split(''), Number.parseInt(value[1], 10), nums];
});

const result = [];

testCases.forEach(([funcs, len, nums]) => {
  const arr = nums.slice();
  
  let error = false;
  let isReversed = false;

  for (let i = 0; i < funcs.length; i++) {
    if (funcs[i] === 'D') {
      if (arr.length === 0) {
        error = true;
        break;
      }

      if (isReversed) {
        arr.pop();
      } else {
        arr.shift();
      }
    } else {
      isReversed = !isReversed;
    }
  }

  if (isReversed) {
    arr.reverse();
  }

  if (error) {
    result.push('error');
  } else {
    result.push(`[${arr.toString()}]`);
  }
});

console.log(result.join('\n'));