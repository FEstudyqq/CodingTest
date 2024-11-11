const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [tc, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let front = 0;
// 5번의 테스트 케이스 분리
while (front < inputs.length) {
  const [w, h] = inputs[front++].split(' ').map(Number);
  const maps = [];
  const fire = [];
  const q = [];
  const fireQ = [];
  let fireFront = 0;
  let qFront = 0;

  // 맵 만들기
  for (let i = 0; i < h; i++) {
    const map = inputs[front++].split('');
    maps.push([...map]);
    fire.push([...map]);
  }

  // 시작 좌표 찾기
  // 불이거나, 상근이면 큐에 삽입
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (maps[i][j] === '*') {
        fireQ.push([i, j]);
        fire[i][j] = 1;
      }
      if (maps[i][j] === '@') {
        q.push([i, j]);
        maps[i][j] = 1;
        fire[i][j] = '.';
      }
    }
  }

  // 불이 각 위치에 도달할 수 있는 최단거리
  while (fireFront < fireQ.length) {
    const [x, y] = fireQ[fireFront++];

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx >= 0 && ny >= 0 && nx < h && ny < w) {
        if (fire[nx][ny] === '.') {
          fireQ.push([nx, ny]);
          fire[nx][ny] = fire[x][y] + 1;
        }
      }
    }
  }

  // 상근이 이동
  while (qFront < q.length) {
    const [x, y] = q[qFront++];

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx >= 0 && ny >= 0 && nx < h && ny < w) {
        if (maps[nx][ny] === '.') {
          if (fire[nx][ny] === '.' || fire[nx][ny] > maps[x][y] + 1) {
            q.push([nx, ny]);
            maps[nx][ny] = maps[x][y] + 1;
          }
        }
      }
    }
  }

  let isEscape = false;
  let escapeCnt;
  // 탈출 성공했는지 확인
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (i >= 1 && i < h - 1 && j >= 1 && j < w - 1) continue;
      if (typeof maps[i][j] === 'number') {
        if (isEscape) {
          escapeCnt = Math.min(maps[i][j], escapeCnt);
        } else {
          isEscape = true;
          escapeCnt = maps[i][j];
        }
      }
    }
  }

  if (isEscape) {
    console.log(escapeCnt);
  } else {
    console.log('IMPOSSIBLE');
  }
}
