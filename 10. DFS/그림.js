const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = nm.split(' ').map((it) => Number(it));
const maps = inputs.map((it) => it.split(' ').map((it) => Number(it)));

let size = 0;

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= m) return false;

  if (maps[x][y] === 1) {
    maps[x][y] = 0;
    size += 1;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);

    return true;
  }
  return false;
}

const result = [0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) {
      result.push(size);
      size = 0;
    }
  }
}

console.log(result.length - 1);
console.log(Math.max(...result));
