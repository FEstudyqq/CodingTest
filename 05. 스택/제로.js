const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const sliceInput = input.slice(1);
const answer = [];

sliceInput.forEach(v => (v === 0 ? answer.pop() : answer.push(v)));

if (answer.length === 0) {
  console.log(0);
} else {
  console.log(answer.reduce((a, c) => a + c, 0));
}
