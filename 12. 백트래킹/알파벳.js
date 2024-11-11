const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [rc, ...map] = fs.readFileSync(path).toString().trim().split('\n');
const [r, c] = rc.split(' ').map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const set = new Set();
const visited = Array.from({ length: r }, () => Array(c).fill(false));
let ans = -1;

const bt = (x, y) => {
  if (ans < set.size) ans = set.size;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    if (visited[nx][ny]) continue;
    if (set.has(map[nx][ny])) continue;

    visited[nx][ny] = true;
    set.add(map[nx][ny]);
    bt(nx, ny);
    visited[nx][ny] = false;
    set.delete(map[nx][ny]);
  }
};

set.add(map[0][0]);
visited[0][0] = true;

bt(0, 0);

console.log(ans);
