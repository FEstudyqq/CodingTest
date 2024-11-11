const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const girls = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\r\n')
  .map((it) => it.split(''));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;

const checkBfs = (selected) => {
  const map = Array.from({ length: 5 }, () => Array(5).fill(false));
  const q = [selected[0]];
  map[selected[0][0]][selected[0][1]] = true;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < 5 && (ny < 5) & !map[nx][ny]) {
        if (selected.some((pos) => pos[0] === nx && pos[1] === ny)) {
          map[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
  return selected.every((pos) => map[pos[0]][pos[1]]);
};

const bt = (selected, sCnt, yCnt, start) => {
  if (selected.length === 7) {
    if (checkBfs(selected)) answer++;
    return;
  }

  for (let i = start; i < 25; i++) {
    const x = Math.floor(i / 5);
    const y = i % 5;
    const girl = girls[x][y];

    if (girl === 'S') {
      bt([...selected, [x, y]], sCnt + 1, yCnt, i + 1);
    } else if (girl === 'Y' && yCnt <= 2) {
      bt([...selected, [x, y]], sCnt, yCnt + 1, i + 1);
    }
  }

  return false;
};

bt([], 0, 0, 0);
console.log(answer);
