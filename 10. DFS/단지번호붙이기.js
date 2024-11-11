const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const map = inputs.map((it) => it.split(''));

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= n) return false;
  if (map[x][y] === '1') {
    map[x][y] = cnt;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    return true;
  }
  return false;
}

let cnt = 2;
for (let i = 0; i < Number(n); i++) {
  for (let j = 0; j < Number(n); j++) {
    if (dfs(i, j)) {
      cnt += 1;
    }
  }
}
const answer = [];
const flatMap = map.flat().filter((it) => it !== '0');
for (let i = 2; i < cnt; i++) {
  answer.push(flatMap.filter((it) => it === i).length);
}

answer.sort((a, b) => a - b);
console.log(cnt - 2);
for (const ans of answer) {
  console.log(ans);
}
