const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

let front = 0;

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const bfs = (map, start, lrc) => {
  const [l, r, c] = lrc;
  const q = [start];

  while (q.length) {
    const [x, y, z] = q.shift();

    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (nx < 0 || ny < 0 || nz < 0 || nx >= l || ny >= r || nz >= c) {
        continue;
      }

      if (map[nx][ny][nz] === 'E') {
        return map[x][y][z] + 1;
      }

      if (map[nx][ny][nz] === '.') {
        map[nx][ny][nz] = map[x][y][z] + 1;
        q.push([nx, ny, nz]);
      }
    }
  }
  return -1;
};

// 시작 위치
while (true) {
  const [l, r, c] = inputs[front++].split(' ').map(Number);

  if (l + r + c === 0) break;

  const map = [];
  for (let i = 0; i < l; i++) {
    let floor = [];
    for (let j = 0; j < r; j++) {
      floor.push(inputs[front++].split(''));
    }
    map.push(floor);
    front++;
  }

  h: for (let i = 0; i < l; i++) {
    for (let j = 0; j < r; j++) {
      for (let k = 0; k < c; k++) {
        if (map[i][j][k] === 'S') {
          map[i][j][k] = 0;
          const ans = bfs(map, [i, j, k], [l, r, c]);

          console.log(ans === -1 ? 'Trapped!' : `Escaped in ${ans} minute(s).`);

          break h;
        }
      }
    }
  }
}
