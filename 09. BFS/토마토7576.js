const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [mn, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const [m, n] = mn.split(' ').map(Number);
const map = input.map((it) => it.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let q = [];
let front = 0;

// 시작점 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) q.push([i, j]);
  }
}

while (front < q.length) {
  const [x, y] = q[front++];

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (map[nx][ny] === 0) {
      map[nx][ny] = map[x][y] + 1;

      q.push([nx, ny]);
    }
  }
}

const answer = map.flat();

if (answer.includes(0)) {
  console.log(-1);
} else {
  console.log(Math.max(...answer) - 1);
}
