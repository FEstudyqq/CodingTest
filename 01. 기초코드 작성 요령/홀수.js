const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input2 = input.map(Number);

const odd = input2.filter(v => v % 2);
const oddSum = odd.reduce((a, c) => a + c, 0);
if (oddSum === 0) {
  console.log(-1);
} else {
  console.log(oddSum);
  console.log(Math.min(...odd));
}
