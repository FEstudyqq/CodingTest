const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, m] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((it) => Number(it));

let answer = '';

const bt = (target, cnt) => {
  if (cnt === m) {
    answer += target + '\n';
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) continue;
    bt(target + ' ' + i, cnt + 1);
  }
};

for (let i = 1; i <= n; i++) {
  bt(i.toString(), 1);
}
console.log(answer);
