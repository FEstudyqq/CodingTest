const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const getEnergy = (a, b) => {
  if (a === b) return 1;
  if (a === 0) return 2;
  if (Math.abs(b - a) % 2 === 0) return 4;
  else return 3;
};

const n = inputs.length;
const dp = Array(n)
  .fill()
  .map(() =>
    Array(5)
      .fill()
      .map(() => Array(5).fill(-1))
  );

const dfs = (step, l, r) => {
  if (step >= n - 1) return 0;
  if (dp[step][l][r] !== -1) return dp[step][l][r];

  const moveLeft = dfs(step + 1, inputs[step], r) + getEnergy(l, inputs[step]);
  const moveRight = dfs(step + 1, l, inputs[step]) + getEnergy(r, inputs[step]);

  dp[step][l][r] = Math.min(moveLeft, moveRight);
  return dp[step][l][r];
};

console.log(dfs(0, 0, 0));
