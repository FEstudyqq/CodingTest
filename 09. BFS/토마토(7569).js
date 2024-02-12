const fs = require('fs');
const [boxSize, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N, H] = boxSize.split(' ').map(Number);
const boxes = Array.from({ length: H }).map(() => []);
let curQueue = [];
let unripeCnt = 0;
let day = 0;

createBoxes();
checkStatus();
bfs();
unripeCnt > 0 ? console.log(-1) : console.log(day);

function createBoxes() {
  lines.forEach((line, index) => {
    const floor = Math.floor(index / N);
    const row = line.split(' ').map(Number);
    boxes[floor].push(row);
  });
}

function checkStatus() {
  boxes.forEach((box, h) => {
    box.forEach((row, r) => {
      row.forEach((tomato, c) => {
        if (tomato === 1) curQueue.push([h, r, c]);
        else if (tomato === 0) unripeCnt++;
      });
    });
  });
}

function bfs() {
  const dh = [-1, 1, 0, 0, 0, 0];
  const dr = [0, 0, -1, 1, 0, 0];
  const dc = [0, 0, 0, 0, -1, 1];
  let nextQueue = [];

  while (curQueue.length > 0) {
    curQueue.forEach(([oh, or, oc]) => {
      for (let i = 0; i < 6; i++) {
        const h = oh + dh[i];
        const r = or + dr[i];
        const c = oc + dc[i];

        if (isValidPosition(h, r, c) && boxes[h][r][c] === 0) {
          unripeCnt--;
          boxes[h][r][c] = 1;
          nextQueue.push([h, r, c]);
        }
      }
    });

    if (nextQueue.length > 0) day++;
    [curQueue, nextQueue] = [nextQueue, []];
  }
}

function isValidPosition(h, r, c) {
  return 0 <= h && h < H && 0 <= r && r < N && 0 <= c && c < M;
}
