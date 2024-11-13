const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const map = Array(n + 1).fill(false);
let ans = 0;

exit: for (let i = 2; i <= n; i++) {
  if (map[i]) continue;

  for (let j = i; j <= n; j += i) {
    if (!map[j]) {
      map[j] = true;
      ans += 1;
    }

    if (ans === k) {
      console.log(j);
      break exit;
    }
  }
}
