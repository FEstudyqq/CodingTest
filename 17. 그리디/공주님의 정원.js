const fs = require('fs');

const [_, ...tail] = fs.readFileSync('./input.txt').toString().trim().split('\n');

let flowers = tail.map(str => str.split(' ')).map(([startMonth, startDay, endMonth, endDay]) => {
  const startDayString = startDay.length === 1 ? `0${startDay}` : startDay;
  const endDayString = endDay.length === 1 ? `0${endDay}` : endDay;

  const start = Number.parseInt(`${startMonth}${startDayString}`, 10);
  const end = Number.parseInt(`${endMonth}${endDayString}`, 10);
  
  return { start, end };
});

flowers.sort((first, second) => second.end - first.end );

if (flowers.every(flower => flower.end < 1130)) {
  console.log(0);
} else if (flowers.every(flower => flower.start > 301)) {
  console.log(0);
} else {
  let result = 0;
  let current = 301;
  let last = 1130;

  while (current <= last) {
    const able = flowers.filter(flower => flower.start <= current);

    if (able.length === 0) {
      break;
    }
    
    const selected = able[0];
    result += 1;
    current = selected.end;

    flowers = flowers.filter(
      flower => flower.start !== selected.start && flower.end !== selected.end
    );
  }

  if (current <= last) {
    console.log(0);
  } else {
    console.log(result);
  }
}