const fs = require('fs');

const [t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < t; i += 1) {
  const n = Number.parseInt(input.shift());
  const inputClothes = input.slice(0, n).map((str) => str.split(' '));
  input.splice(0, n);

  const map = new Map();

  inputClothes.forEach((cloth) => {
    if (map.has(cloth[1])) {
      map.get(cloth[1]).push(cloth[0])
    } else {
      map.set(cloth[1], [cloth[0]]);
    }
  });

  const clothes = [...map.values()];

  // 각 종류에 대해 안 입은 상태 추가
  const variety = clothes.map((type) => [...type, '']);

  const result = variety.flatMap((type) => {
    return type.length;
  }).reduce((previous, current) => {
    return previous * current;
  }, 1);

  // 알몸 상태 제외
  console.log(result - 1);
}