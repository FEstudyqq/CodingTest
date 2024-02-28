const fs = require('fs');
const [T, ...testCases] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

for (let t = 0; t < T; t++) {
  const numKind = {};
  const cntClothes = Number(testCases.shift());

  for (let i = 0; i < cntClothes; i++) {
    const kind = testCases.shift().split(' ')[1];
    numKind[kind] = numKind[kind] ? numKind[kind] + 1 : 1;
  }

  const total = Object.values(numKind).reduce(
    (total, num) => total * (num + 1), // 종류 개수 + 안 입을 경우(+1)
    1,
  );
  console.log(total - 1); // 아무것도 안 입는 경우(1) 빼주기
}
