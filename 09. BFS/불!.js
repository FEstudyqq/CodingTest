const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [rc, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [r, c] = rc.split(' ').map(Number);
const map = inputs.map((it) => it.split(''));
const fire = inputs.map((it) => it.split(''));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const fireQ = [];
const q = [];

// 불의 좌표와 지훈이의 좌표값 구하기
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === '#') continue;

    if (map[i][j] === 'J') {
      q.push([i, j]);
      map[i][j] = 1;
      fire[i][j] = '.';
    }

    if (map[i][j] === 'F') {
      fireQ.push([i, j]);
      fire[i][j] = 1;
    } else fire[i][j] = '.';
  }
}

// 불의 최단거리 계산
while (fireQ.length) {
  const [x, y] = fireQ.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    if (fire[nx][ny] === '#') continue;
    if (fire[nx][ny] === '.') {
      fire[nx][ny] = fire[x][y] + 1;
      fireQ.push([nx, ny]);
    }
  }
}

// 지훈이가 탈출할 수 있는지 확인
while (q.length) {
  const [x, y] = q.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    if (map[nx][ny] === '#') continue;
    if (map[nx][ny] === '.') {
      if (fire[nx][ny] === '.' || map[x][y] + 1 < fire[nx][ny]) {
        map[nx][ny] = map[x][y] + 1;
        q.push([nx, ny]);
      } else {
        map[nx][ny] = 'F';
      }
    }
  }
}

let isEscape = [];

// 탈출 여부 확인
for (let i = 0; i < r; i++) {
  if (typeof map[i][0] === 'number') isEscape.push(map[i][0]);
  if (typeof map[i][c - 1] === 'number') isEscape.push(map[i][c - 1]);
}

for (let i = 0; i < c; i++) {
  if (typeof map[0][i] === 'number') isEscape.push(map[0][i]);
  if (typeof map[r - 1][i] === 'number') isEscape.push(map[r - 1][i]);
}

if (isEscape.length === 0) {
  console.log('IMPOSSIBLE');
} else {
  console.log(Math.min(...isEscape));
}
