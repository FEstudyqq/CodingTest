const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, ...tail] = fs.readFileSync(path).toString().trim().split('\n');
const answers = [0];
const T = [0];
const P = [0];
const N = Number(head);

for (const tp of tail) {
  const [t, p] = tp.split(' ').map(Number);

  T.push(t);
  P.push(p);
}

const bt = (selected, total) => {
  const pre = selected[selected.length - 1];

  for (let i = pre + 1; i <= N; i++) {
    if (i === N) {
      const answer = T[i] === 1 && pre + T[pre] <= i ? total + P[i] : total;
      answers.push(answer);
      return;
    }
    if (pre + T[pre] <= i && i + T[i] - 1 <= N) {
      bt([...selected, i], total + P[i]);
    }
  }

  if (pre === N && T[pre] === 1) answers.push(total);
};

for (let i = 1; i <= N; i++) {
  if (i + T[i] - 1 <= N) {
    bt([i], P[i]);
  }
}

console.log(Math.max(...answers));
