const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim();

if (inputs === '1 2 3 4 5 6 7 8') console.log('ascending');
else if (inputs === '8 7 6 5 4 3 2 1') console.log('descending');
else console.log('mixed');
