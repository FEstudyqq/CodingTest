# 📌개념

- 문제를 작은 문제로 쪼개어 **계산 결과를 저장**해놓고, 동일한 계산을 해야할 때 **재사용**하는 방법
- 이미 수행한 작업을 다시 수행하지 않으므로, cost를 줄일 수 있음
- 이름이 `Dynamic Programming`이지만, 의미를 살려 `기억하며 풀기`라고 불리기도 함

# 📌사용 방법

- 계산 결과를 저장(메모이제이션)할 자료구조 필요
- 1️⃣큰 문제부터 해결하는 **탑-다운** 방식 ⇒ **재귀** 사용
- 2️⃣작은 문제부터 해결하는 **바텀-업** 방식 ⇒ **반복문** 사용

# 📌예시

## 피보나치 수열

- 탑-다운 (재귀)

```javascript
const memo = []; // array for memoization
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  // recur for non-memoized cases
  if (memo[n] === undefined) {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  return memo[n];
}
```

- 바텀-업 (반복문)

```javascript
function fibonacci(n) {
  const memo = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}
```
