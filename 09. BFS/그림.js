const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = nm.split(' ').map((it) => Number(it));
const maps = inputs.map((it) => it.split(' ').map((it) => Number(it)));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const q = [];
function bfs(x, y) {
  let size = 1;
  q.push([x, y]);
  maps[x][y] = 0;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (maps[nx][ny] === 1) {
        size += 1;
        maps[nx][ny] = 0;
        q.push([nx, ny]);
      }
    }
  }
  return size;
}

const result = [0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (maps[i][j] === 1) {
      result.push(bfs(i, j));
    }
  }
}

console.log(result.length - 1);
console.log(Math.max(...result));
