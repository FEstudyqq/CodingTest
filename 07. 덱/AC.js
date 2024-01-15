const fs = require('fs');
const [T, ...input] = fs
  // .readFileSync('/dev/stdin')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const result = [];
solution();

function solution() {
  for (let i = 0; i < Number(T); i++) {
    const functions = input[3 * i];
    const array = parse(input[3 * i + 2]);
    executeTestCase(functions, array);
  }
  console.log(result.join('\n'));
}

function executeTestCase(functions, array) {
  let isReversed = false;
  let left = 0;
  let right = array.length - 1;

  for (let name of functions) {
    if (name === 'R') {
      isReversed = !isReversed;
      continue;
    }

    // case of name === 'D'
    if (left > right) return result.push('error');
    else isReversed ? right-- : left++;
  }

  const sliced = array.slice(left, right + 1);
  if (isReversed) sliced.reverse();
  result.push(`[${sliced.join(',')}]`);
}

function parse(string) {
  return string
    .substring(1, string.length - 1)
    .split(',')
    .filter((num) => num !== '');
}
