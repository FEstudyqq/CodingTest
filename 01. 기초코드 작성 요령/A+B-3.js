const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');

for (const input of inputs) {
  const [a, b] = input.split(' ').map(Number);
  console.log(a + b);
}
