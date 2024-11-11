const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const num = fs.readFileSync(path).toString().trim();

console.log(num.charCodeAt());
