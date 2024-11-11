const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  function bfs(x, y) {
    const q = [[x, y]];

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        nx = x + dx[i];
        ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (maps[nx][ny] === 0) continue;
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = maps[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);

  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}
