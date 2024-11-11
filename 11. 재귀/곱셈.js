const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b, c] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

function recursive(a, n) {
  if (n === 0n) return 1n;
  if (n === 1n) return a % c;

  if (n % 2n === 0n) {
    let result = recursive(a, n / 2n);
    return (result * result) % c;
  } else {
    let result = recursive(a, (n - 1n) / 2n);
    return (result * result * a) % c;
  }
}

console.log(recursive(a, b).toString());
