const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, inputs] = fs.readFileSync(path).toString().trim().split('\r\n');

const n = inputs.split(' ').map(Number);

console.log(Math.min(...n), Math.max(...n));
