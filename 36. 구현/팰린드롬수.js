const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (const input of inputs) {
  if (input === '0') break;

  console.log(input === input.split('').reverse().join('') ? 'yes' : 'no');
}
