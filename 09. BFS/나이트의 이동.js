const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [tc, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const dx = [1, 1, 2, 2, -1, -1, -2, -2];
const dy = [2, -2, 1, -1, 2, -2, 1, -1];

for (let t = 0; t < Number(tc); t++) {
  const [l, start, end] = [
    Number(inputs[t * 3]),
    inputs[t * 3 + 1].split(' ').map((it) => Number(it)),
    inputs[t * 3 + 2].split(' ').map((it) => Number(it)),
  ];

  const map = Array.from({ length: l }, () => Array(l).fill(0));
  map[start[0]][start[1]] = 1;

  const bfs = () => {
    const q = [[start[0], start[1], 0]];

    while (q.length) {
      const [x, y, cnt] = q.shift();

      if (x === end[0] && y === end[1]) return cnt;

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
        if (map[nx][ny] === 0) {
          map[nx][ny] += 1;
          q.push([nx, ny, cnt + 1]);
        }
      }
    }
  };

  console.log(bfs());
}
