const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [s, i] = fs.readFileSync(path).toString().trim().split('\n');

console.log(s[Number(i) - 1]);
