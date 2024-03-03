const fs = require('fs');
const [N, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 꽃이 피는 순서대로 정렬 (피는 날짜가 같으면, 지는 순서대로 정렬)
const flowers = lines
  .map((line) => {
    let [startM, startD, endM, endD] = line.split(' ');
    if (startD.length === 1) startD = '0' + startD;
    if (endD.length === 1) endD = '0' + endD;
    return {
      s: Number(startM + startD),
      e: Number(endM + endD),
    };
  })
  .sort((a, b) => {
    if (a.s === b.s) return a.e - b.e;
    return a.s - b.s;
  });

function count() {
  let cnt = 0;
  let i = 0;
  let plantedEnd = 301;
  let maxEnd = 301;

  while (plantedEnd < 1200) {
    if (i >= flowers.length) return 0; // 12월 내에 지는 꽃이 없는 경우

    while (i < flowers.length) {
      const flower = flowers[i];

      // 심은 꽃이 지기 전에 피는 꽃들 중에서, 가장 오래 피어있는 녀석 고르기
      if (flower.s <= plantedEnd) {
        if (flower.e > maxEnd) maxEnd = flower.e;
        i++;
        continue;
      }

      // 날짜가 이어지지 않는 경우
      else if (flower.s > maxEnd) return 0;

      // 갱신이 필요한 경우
      break;
    }

    // update
    plantedEnd = maxEnd;
    cnt++;
  }

  return cnt;
}

console.log(count());
