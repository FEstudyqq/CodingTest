const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], A, B] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) =>
    it
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b)
  );
let ans = 0;
for (let i = 0; i < n; i++) {
  ans += A[n - i - 1] * B[i];
}
console.log(ans);
