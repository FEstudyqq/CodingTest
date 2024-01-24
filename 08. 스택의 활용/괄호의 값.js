const fs = require('fs');
const string = fs.readFileSync('/dev/stdin').toString().trim();

const stack = []; // 괄호열이 올바른지 확인하기 위한 스택
let currentValue = 1;
let result = 0;

for (let i = 0; i < string.length; i++) {
  const bracket = string[i];
  const top = stack[stack.length - 1];

  // 왼쪽 괄호 나오면 현재 값 * 2 또는 3, push
  if (bracket === '(') {
    stack.push(bracket);
    currentValue *= 2;
  } else if (bracket === '[') {
    stack.push(bracket);
    currentValue *= 3;
  }
  // 오른쪽 괄호 나오면 현재 값 / 2 또는 3, pop
  else if (bracket === ')' && top === '(') {
    if (string[i - 1] === '(') result += currentValue;

    stack.pop();
    currentValue /= 2;
  } else if (bracket === ']' && top === '[') {
    if (string[i - 1] === '[') result += currentValue;

    stack.pop();
    currentValue /= 3;
  }
  // 잘못된 괄호면 loop 중단
  else {
    result = 0;
    break;
  }
}

// 스택에 처리하지 못한 왼쪽 괄호가 남아있다면 result = 0
if (stack.length > 0) {
  result = 0;
}

console.log(result);
