const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path));

console.log(n * 4);
