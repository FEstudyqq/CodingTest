const fs = require('fs');
const [T, ...testCases] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

for (let t = 0; t < T; t++) {
  const As = testCases[t * 3 + 1];
  const Bs = testCases[t * 3 + 2].sort((a, b) => Number(a) - Number(b));

  const sum = As.reduce((sum, A) => {
    let count = Bs.findIndex((B) => A <= B);
    if (count === -1) count = Bs.length;
    return sum + count;
  }, 0);

  console.log(sum);
}
