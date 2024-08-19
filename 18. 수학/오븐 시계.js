const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [a, b] = inputs[0].split(' ').map(Number);
const c = Number(inputs[1]);

const totalMin = b + c;
const totalHour = totalMin / 60 + a;

console.log(Math.floor(totalHour % 24) + ' ' + (totalMin % 60));
