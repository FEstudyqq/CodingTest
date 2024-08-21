const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, rcd, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const map = inputs.map((it) => it.split(' ').map(Number));
let [r, c, d] = rcd.split(' ').map(Number);
let ans = 0;

exit: while (true) {
  if (map[r][c] === 0) {
    map[r][c] = 2;
    ans += 1;
  }

  let flag = false;
  for (let i = 0; i < 4; i++) {
    d -= 1;
    if (d === -1) d = 3;
    if (d === 0) {
      nr = r - 1;
      nc = c;
    } else if (d === 1) {
      nr = r;
      nc = c + 1;
    } else if (d === 2) {
      nr = r + 1;
      nc = c;
    } else if (d === 3) {
      nr = r;
      nc = c - 1;
    }

    if (map[nr][nc] === 0) {
      r = nr;
      c = nc;
      flag = true;
      break;
    }
  }

  if (!flag) {
    for (let i = 0; i < 4; i++) {
      let nr;
      let nc;

      if (d === 0) {
        nr = r + 1;
        nc = c;
      } else if (d === 1) {
        nr = r;
        nc = c - 1;
      } else if (d === 2) {
        nr = r - 1;
        nc = c;
      } else if (d === 3) {
        nr = r;
        nc = c + 1;
      }

      if (map[nr][nc] === 1) {
        break exit;
      } else if (map[nr][nc] === 2 || map[nr][nc] === 0) {
        r = nr;
        c = nc;
        break;
      }
    }
  }
}

console.log(ans);
