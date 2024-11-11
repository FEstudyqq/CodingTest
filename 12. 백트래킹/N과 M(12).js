const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path, 'utf-8')
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n, m] = inputs[0];
const numbers = inputs[1].sort((a, b) => a - b);

let ans = '';

const bt = (selected, start) => {
  if (selected.length === m) {
    ans += selected.join(' ') + '\n';
    return;
  }

  let preNumber = -1;

  for (let i = start; i < n; i++) {
    if (preNumber !== numbers[i]) {
      bt([...selected, numbers[i]], i);

      preNumber = numbers[i];
    }
  }
};

bt([], 0);
console.log(ans);
