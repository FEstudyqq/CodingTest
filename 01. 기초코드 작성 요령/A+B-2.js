const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

console.log(a + b);
