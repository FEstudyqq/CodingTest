const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const y = Number(fs.readFileSync(path));

console.log(y - 543);
