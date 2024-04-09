const fs = require('fs');
const rawField = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(''));

const ROW = 6;
const COL = 12;

function solution() {
  const field = createField();

  let count = 0; // 연쇄 카운트
  while (deleteGroup(field)) {
    fall(field);
    count++;
  }

  console.log(count);
}

// 가로<->세로 변형
function createField() {
  const field = Array.from({ length: ROW }).map(() => Array());

  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 6; c++) {
      field[c].push(rawField[r][c]);
    }
  }

  return field;
}

function deleteGroup(field) {
  let possible = false; // 지울 뿌요가 있는지 여부

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      if (field[r][c] === '.') continue;
      if (bfs(field, r, c)) possible = true;
    }
  }

  return possible;
}

function bfs(field, r, c) {
  const target = field[r][c];
  const visited = Array.from({ length: ROW }).map(() =>
    Array.from({ length: COL }).fill(false),
  );
  visited[r][c] = true;
  const queue = [[r, c]];
  let pointer = 0;

  const dr = [0, 0, 1, -1];
  const dc = [-1, 1, 0, 0];

  while (pointer < queue.length) {
    const [r, c] = queue[pointer];
    pointer++;

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        0 <= nr &&
        nr < ROW &&
        0 <= nc &&
        nc < COL &&
        !visited[nr][nc] &&
        field[nr][nc] === target
      ) {
        queue.push([nr, nc]);
        visited[nr][nc] = true;
      }
    }
  }

  // 지울 뿌요가 없는 경우
  if (queue.length < 4) {
    return false;
  }

  // 지울 뿌요가 있는 경우
  queue.forEach(([r, c]) => {
    field[r][c] = '.';
  });
  return true;
}

// 연쇄 이후 뿌요들을 필드 아래쪽으로 내리기
function fall(field) {
  for (let r = 0; r < field.length; r++) {
    const puyos = field[r].filter((puyo) => puyo !== '.');
    field[r] = [...Array(12 - puyos.length).fill('.'), ...puyos];
  }
}

solution();
