const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')[1]
  .split(' ')
  .map(BigInt);

const liquid = inputs.sort((a, b) => (a > b ? 1 : -1));

let left = 0;
let right = liquid.length - 1;
let minDiff = 2000000000n;
const ans = [0, 0];

while (left < right) {
  let sum = liquid[left] + liquid[right];
  sum = sum > 0 ? sum : -1n * sum;

  if (sum < minDiff) {
    ans[0] = liquid[left];
    ans[1] = liquid[right];
    minDiff = sum;
  }

  sum = liquid[left] + liquid[right];
  if (sum > 0) right -= 1;
  else if (sum < 0) left += 1;
  else break;
}

console.log(ans[0].toString(), ans[1].toString());
