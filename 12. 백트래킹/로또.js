const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map((it) => Number(it)));

function bt(lottos, selected) {
  if (selected.length === 6) {
    console.log(...selected);
    return selected;
  }

  for (const lotto of lottos) {
    if (!selected.includes(lotto)) {
      if (selected.length === 0) {
        bt(lottos, [...selected, lotto]);
      } else if (selected[selected.length - 1] < lotto) {
        bt(lottos, [...selected, lotto]);
      }
    }
  }
}

for (const input of inputs) {
  if (input[0] === 0) break;
  else {
    const [_, ...lottos] = input;
    bt(lottos, []);
    console.log();
  }
}
