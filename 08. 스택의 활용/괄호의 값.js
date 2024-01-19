const fs = require('fs');

const parentheses = fs.readFileSync('/dev/stdin').toString().trim().split('');

const stack = [];

let result = 0;
let temp = 1;

for (let i = 0; i < parentheses.length; i++) {
  const value = parentheses[i];

  if (value === '(' || value === '[') {
    stack.push(value);

    if (value === '(') {
      temp *= 2;
    } else {
      temp *= 3;
    }

  } else {
    if (stack.length === 0) {
      result = 0;
      break;
    } else {
      const before = stack.pop();

      if (value === ')') {
        if (before === '[') {
          result = 0;
          break;
        }

        if (parentheses[i - 1] === '(') {
          result += temp;
        }

        temp /= 2;

      } else { // value === ']'
        if (before === '(') {
          result = 0;
          break;
        }

        if (parentheses[i - 1] === '[') {
          result += temp;
        }

        temp /= 3;
      }
    }
  }
}

if (stack.length !== 0) {
  result = 0;
}

console.log(result);