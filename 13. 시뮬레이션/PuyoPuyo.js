const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\r\n')
  .map((it) => it.split(''));
const puyo = Array.from({ length: 6 }).map((_) => []);

const printMap = (map) => {
  for (let i = 0; i < map.length; i++) console.log(map[i].join(' '));
};

// 뿌요를 옆으로 눕힘
for (let i = 11; i >= 0; i--) {
  for (let j = 0; j < 6; j++) {
    puyo[j].push(inputs[i][j]);
  }
}

let visited = puyo.map((it) => [...it]);

// 뿌요를 업데이트해줌
const makeNewPuyo = (puyo) => {
  for (let i = 0; i < 6; i++) {
    if (puyo[i].every((it) => it === '.')) continue;

    const newPuyo = puyo[i].filter((it) => it !== '.');

    while (newPuyo.length !== 12) {
      newPuyo.push('.');
    }

    puyo[i] = newPuyo;
  }
};

// 뿌요를 부심
const crushPuyo = (puyo, visited) => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 12; j++) {
      if (visited[i][j] === true) puyo[i][j] = '.';
    }
  }
};

// 뿌요가 연결되어 있는지 확인
const dfs = (x, y, target) => {
  if (x < 0 || y < 0 || x >= 6 || y >= 12) return false;

  if (visited[x][y] === target) {
    visited[x][y] = true;
    size += 1;

    dfs(x + 1, y, target);
    dfs(x - 1, y, target);
    dfs(x, y + 1, target);
    dfs(x, y - 1, target);

    return true;
  }

  return false;
};

// 코드의 시작 맵을 돌면서 상태 확인
let size = 0;
let breakLevel = 0;
let isBreak = false;
while (true) {
  makeNewPuyo(puyo);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 12; j++) {
      visited = puyo.map((it) => [...it]);

      if (puyo[i][j] !== '.' && dfs(i, j, puyo[i][j])) {
        if (size >= 4) {
          crushPuyo(puyo, visited);
          isBreak = true;
        }

        size = 0;
      }
    }
  }

  if (!isBreak) break;
  breakLevel += 1;
  isBreak = false;
}

// 결과를 출력
console.log(breakLevel);
