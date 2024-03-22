function solution(numbers, target) {
  const result = [];

  function recursive(x, current) {
    if (x === numbers.length) {
      result.push(current);
      return;
    } else {
      recursive(x + 1, current + numbers[x]);
      recursive(x + 1, current - numbers[x]);
    }
  }

  recursive(0, 0);

  const answer = result.filter((it) => it === target);
  return answer.length;
}
