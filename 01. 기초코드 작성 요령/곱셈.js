const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const num1 = Number(inputs[0]);
const num2 = inputs[1];

console.log(num1 * Number(num2[2]));
console.log(num1 * Number(num2[1]));
console.log(num1 * Number(num2[0]));
console.log(num1 * Number(num2));
