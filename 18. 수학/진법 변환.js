const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split(' ');
const n = inputs[0];
const b = Number(inputs[1]);

const num = parseInt(n, b);

console.log(num);
