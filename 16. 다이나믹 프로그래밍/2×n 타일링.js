const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const result = Array.from({ length: n });

result.forEach((_, i) => {
  if (i === 0) result[i] = 1;
  else if (i === 1) result[i] = 2;
  else result[i] = (result[i - 1] + result[i - 2]) % 10007;
});

console.log(result[n - 1]);

/**
 * 2xn에 대한 모든 방법을 찾는 것을 f(n)이라고 할 때,
 * n개 중에 1*2(세로) 만큼을 고정한다면, 남은 n-1개를 열거하는 방법은 f(n-1)와 같다.
 * n개 중에 2*1(가로) 만큼을 고정한다면, 남은 n-2개를 열거하는 방법은 f(n-2)와 같다.
 * 그 이상은 고정해도 어차피 위에서 열거한 방법 안에 속하게 되므로 무시한다.
 * 따라서 f(n) = f(n-1) + f(n-2)
 */
