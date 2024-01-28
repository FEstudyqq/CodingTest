const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [t, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const testCase = inputs.map((it) => it.split(' ').map((it) => Number(it)));

const maps = [];
let map = [];

// 테스트 케이스 분리 / 맵 생성
for (const tc of testCase) {
  if (tc.length === 3) {
    const [m, n, k] = tc;
    if (map.length !== 0) maps.push(map);
    map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  } else {
    const [y, x] = tc;
    map[x][y] = 1;
  }
}
maps.push(map);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// bfs 구현
function bfs(x, y, m, n, map) {
  const q = [];
  q.push([x, y]);

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

      if (map[nx][ny] === 1) {
        map[nx][ny] = 0;
        q.push([nx, ny]);
      }
    }
  }
}

for (const map of maps) {
  const [m, n] = [map.length, map[0].length];
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        bfs(i, j, m, n, map);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
