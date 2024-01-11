const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tops = input[1].split(' ').map(Number);
const indexes = []; // 수신 가능한 탑의 번호 스택
const results = []; // 수신한 탑의 번호 배열

tops.forEach((current, index) => {
  while (indexes.length > 0) {
    const receivable = indexes[indexes.length - 1];

    if (tops[receivable] > current) {
      results.push(receivable + 1);
      break;
    } else {
      indexes.pop();
    }
  }

  if (indexes.length === 0) {
    results.push(0);
  }

  indexes.push(index);
});

console.log(results.join(' '));
