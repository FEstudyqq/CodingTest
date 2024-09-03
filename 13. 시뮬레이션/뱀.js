const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const k = Number(inputs[1]);
const apples = inputs.slice(2, 2 + k);
const infos = inputs.slice(3 + k).map((it) => it.split(' '));
// 상 좌 하 우
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

// 맵 생성
const map = Array.from({ length: n }).map(() =>
  Array.from({ length: n }).fill('.')
);

// 맵 출력
const printMap = (...param) => {
  console.log(...param);
  for (let i = 0; i < n; i++) console.log(map[i].join(' '));
};

console.log(map);
// 사과 생성
for (const apple of apples) {
  const [x, y] = apple.split(' ').map(Number);
  map[x - 1][y - 1] = 'A';
}

// 뱀 시작 위치  설정
map[0][0] = 'S';

let time = 0;
let d = 3;
let infoIdx = 0;
let front = 0;
const q = [[0, 0]];

while (true) {
  const [x, y] = q[front];
  const nx = x + dx[d];
  const ny = y + dy[d];

  if (nx < 0 || ny < 0 || nx === n || ny === n) break;
  if (map[nx][ny] === 'S') break;

  if (map[nx][ny] === 'A') {
    map[nx][ny] = 'S';
    q.push([nx, ny]);
    front = q.length - 1;
  } else if (map[nx][ny] === '.') {
    const [px, py] = q.shift();
    map[px][py] = '.';
    map[nx][ny] = 'S';
    q.push([nx, ny]);
  }

  time += 1;
  if (infoIdx < infos.length && Number(infos[infoIdx][0]) === time) {
    if (infos[infoIdx][1] === 'D') d = (d + 3) % 4;
    if (infos[infoIdx][1] === 'L') d = (d + 5) % 4;
    infoIdx += 1;
  }
}

console.log(time + 1);
