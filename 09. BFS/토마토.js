const fs = require('fs');
const [size, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [W, H] = size.split(' ').map(Number);
const map = lines.map((line) => line.split(' ').map(Number));
let curQueue = []; // 현재 단계 익은 토마토의 위치 저장
let nextQueue = []; // 다음 단계에 탐색할 토마토의 위치 저장

console.log(solution());

function solution() {
  const cntZero = checkTomatoesStatus();
  if (cntZero === 0) return 0; // 토마토가 처음부터 다 익어있으면, 0 반환

  const day = ripenTomatoes(); // 토마토 익히기

  // 끝까지 익지 못한 토마토가 있는 경우, -1 반환
  for (let row of map) {
    if (row.includes(0)) return -1;
  }

  return day;
}

function checkTomatoesStatus() {
  let cntZero = 0;

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (map[r][c] === 1) {
        curQueue.push([r, c]);
      }
      if (map[r][c] === 0) {
        cntZero++;
      }
    }
  }

  return cntZero;
}

function ripenTomatoes() {
  let day = 0;

  while (curQueue.length > 0) {
    for (let i = 0; i < curQueue.length; i++) {
      const [r, c] = curQueue[i];
      bfs(r, c); // 현재 익은 토마토의 상하좌우만 탐색
    }

    // 새로 익은 토마토가 있으면, 일수 증가
    if (nextQueue.length > 0) {
      day++;
    }

    // 큐 초기화
    curQueue = [...nextQueue];
    nextQueue = [];
  }

  return day;
}

function bfs(r, c) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (isValidPosition(nr, nc) && map[nr][nc] === 0) {
      nextQueue.push([nr, nc]);
      map[nr][nc] = 1;
    }
  }
}

function isValidPosition(r, c) {
  return 0 <= r && r < H && 0 <= c && c < W;
}
