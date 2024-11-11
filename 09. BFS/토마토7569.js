const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [mnh, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const [m, n, h] = mnh.split(' ').map(Number);
const tomatoBoxes = [];
let tomatoBox = [];
let q = [];
let front = 0;

// 6방향 명시
const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

// 맵 생성
for (let i = 0; i < n * h; i++) {
  tomatoBox.push(inputs[i].split(' ').map(Number));

  if (tomatoBox.length === n) {
    tomatoBoxes.push(tomatoBox);
    tomatoBox = [];
  }
}

// 시작 좌표 구해주기
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (tomatoBoxes[i][j][k] === 1) {
        q.push([i, j, k]);
      }
    }
  }
}

// bfs 시작
while (front < q.length) {
  const [z, y, x] = q[front++];

  for (let i = 0; i < 6; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    const nz = dz[i] + z;

    if (nx < 0 || ny < 0 || nz < 0 || nx >= m || ny >= n || nz >= h) continue;

    if (tomatoBoxes[nz][ny][nx] === 0) {
      tomatoBoxes[nz][ny][nx] = tomatoBoxes[z][y][x] + 1;
      q.push([nz, ny, nx]);
    }
  }
}

const answer = tomatoBoxes.flat(Infinity);

if (answer.includes(0)) {
  console.log(-1);
} else {
  console.log(Math.max(...answer) - 1);
}
