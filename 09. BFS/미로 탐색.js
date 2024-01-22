const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = nm.split(' ').map((it) => Number(it));
const maps = inputs.map((it) => it.split('').map((it) => Number(it)));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  const q = [];
  q.push([x, y]);

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      // 이동할 좌표 값 명시
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 좌표 값이 범위를 벗어난다면
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      // 못지나간다면 continue
      if (maps[nx][ny] === 0) continue;
      // 지나갈 수 있다면
      if (maps[nx][ny] === 1) {
        // 해당 위치에 방문 횟수 증가
        maps[nx][ny] = maps[x][y] + 1;
        // 좌표 값 큐에 추가
        q.push([nx, ny]);
      }
    }
  }
  return maps[n - 1][m - 1];
}

console.log(bfs(0, 0));
