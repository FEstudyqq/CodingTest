const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n, m] = inputs.shift();
const numbers = inputs.pop().sort((a, b) => a - b);

let ans = '';
const bt = (selected, cnt, start) => {
  if (cnt === m) {
    ans += selected.trim() + '\n';
    return;
  }

  for (let i = start; i < n; i++) {
    bt(selected + ' ' + numbers[i].toString(), cnt + 1, i);
  }
};

bt('', 0, 0);

console.log(ans);
