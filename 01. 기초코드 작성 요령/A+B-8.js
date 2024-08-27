const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (let i = 1; i < inputs.length; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
