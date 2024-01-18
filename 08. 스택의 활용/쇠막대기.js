const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const stack = [];
let answer = 0;
for (const i in input) {
  if (input[i] === '(') {
    stack.push(input[i]);
  } else if (input[i - 1] === '(') {
    stack.pop();
    answer += stack.length;
  } else {
    stack.pop();
    answer++;
  }
}
console.log(answer);
