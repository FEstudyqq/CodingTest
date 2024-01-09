const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const [N, ...sliceInput] = input;
const answer = [];

sliceInput.forEach(v => (v === 0 ? answer.pop() : answer.push(v)));

N === 0 ? console.log(0) : console.log(answer.reduce((a, c) => a + c, 0));
