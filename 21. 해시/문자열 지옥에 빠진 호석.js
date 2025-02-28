const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

const map = input.slice(1, n + 1).map((row) => [...row]);

const strings = input.slice(n + 1);
const stringsSet = new Set(strings);

// 만들어야 하는 문자열을 key, 경우의 수를 value로 하는 해시 생성
const hash = {};

// 문자열을 하나씩 보면서 격자를 순회
stringsSet.forEach((str) => {
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (str[0] === map[r][c]) {
        dfs(r, c, str, 0);
      }
    }
  }
});

function dfs(r, c, target, depth) {
  // 상하좌우 대각선
  const dr = [-1, 1, 0, 0, -1, 1, 1, -1];
  const dc = [0, 0, -1, 1, 1, 1, -1, -1];

  if (depth === target.length - 1) {
    hash[target] = hash[target] + 1 || 1;
    return;
  }

  for (let i = 0; i < dr.length; i++) {
    // 새로 방문할 좌표 설정
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0) nr = n - 1;
    if (nr >= n) nr = 0;
    if (nc < 0) nc = m - 1;
    if (nc >= m) nc = 0;

    // 방문했을 때 문자열을 만들 수 있다면 방문(재귀)
    if (map[nr][nc] === target[depth + 1]) {
      dfs(nr, nc, target, depth + 1);
    }
  }
}

const answer = strings.map((str) => hash[str] ?? 0).join('\n');
console.log(answer);
