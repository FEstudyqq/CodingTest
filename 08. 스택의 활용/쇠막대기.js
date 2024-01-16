const fs = require('fs');

const parentheses = fs.readFileSync('/dev/stdin').toString().split('');

const stack = [];

let result = 0;

for (let i = 0; i < parentheses.length; i++) {
  if (parentheses[i] === '(') {
    stack.push(parentheses[i]);
  } else {
    stack.pop();

    if (parentheses[i - 1] === '(') {
      result += stack.length;
    } else {
      result++;
    }
  }
}

console.log(result);