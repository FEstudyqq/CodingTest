const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b] = fs.readFileSync(path, 'utf-8').trim().split('\n').map(BigInt);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());
