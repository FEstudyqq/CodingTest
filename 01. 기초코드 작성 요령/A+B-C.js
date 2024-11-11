const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b, c] = fs.readFileSync(path).toString().trim().split('\n');

console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);
