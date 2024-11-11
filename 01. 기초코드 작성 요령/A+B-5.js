const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (const input of inputs) {
  const [a, b] = input.split(' ').map(Number);
  if (!a) break;

  console.log(a + b);
}
