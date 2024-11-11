const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, ...input] = fs.readFileSync(path).toString().trim().split('\r\n');
const n = Number(head);
const area = input.map((it) => it.split(' ').map((it) => Number(it)));
let visited;
let answer = 0;

let max = 0;
let min = 100;

function dfs(x, y, h) {
  if (x < 0 || y < 0 || x >= n || y >= n) return false;
  if (visited[x][y] === true) return false;
  if (area[x][y] < h) {
    visited[x][y] = true;

    return false;
  } else {
    visited[x][y] = true;
    dfs(x + 1, y, h);
    dfs(x - 1, y, h);
    dfs(x, y + 1, h);
    dfs(x, y - 1, h);

    return true;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (area[i][j] > max) max = area[i][j];
    if (area[i][j] < min) min = area[i][j];
  }
}

for (let h = min; h <= max; h++) {
  visited = Array.from({ length: n }, () => Array(n).fill(false));

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, h)) {
        cnt += 1;
      }
    }
  }
  answer = Math.max(answer, cnt);
}

console.log(answer);
