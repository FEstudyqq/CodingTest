const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const getEnergy = (a, b) => {
  if (a === b) return 1;
  if (a === 0) return 2;
  if (Math.abs(b - a) % 2 === 0) return 4;
  else return 3;
};

const n = inputs.length - 1;
const dp = Array(n)
  .fill()
  .map(() =>
    Array(5)
      .fill()
      .map(() => Array(5).fill(false))
  );

const dfs = (step, l, r) => {
  // 재귀함수 종료 조건
  if (step >= n) return 0;
  // 이미 방문하여 메모제이션이 됐다면,
  if (dp[step][l][r]) return dp[step][l][r];

  // 각 발을 움직였을때의 값
  const moveLeft = dfs(step + 1, inputs[step], r) + getEnergy(l, inputs[step]);
  const moveRight = dfs(step + 1, l, inputs[step]) + getEnergy(r, inputs[step]);

  // 두 값중 최소값으로 갱신
  dp[step][l][r] = Math.min(moveLeft, moveRight);

  return dp[step][l][r];
};

console.log(dfs(0, 0, 0));
