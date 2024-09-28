const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (const input of inputs) {
  const [a, b] = input.split(' ').map(Number);

  if (a == 0 && b == 0) break;

  if (a % b === 0) console.log('multiple');
  else if (b % a === 0) console.log('factor');
  else console.log('neither');
}
