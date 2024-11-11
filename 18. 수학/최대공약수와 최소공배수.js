const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let i = a; i > 0; i--) {
  if (b % i === 0 && a % i === 0) {
    console.log(i);
    console.log(i * (a / i) * (b / i));

    break;
  }
}
