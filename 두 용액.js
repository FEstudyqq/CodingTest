const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const n = Number(inputs[0]);

const acid = [];
const alkaline = [];

const selectionSort = (arr) => {
  for (let x = 1; x < arr.length; x++) {
    let value = arr[x];
    let prev = x - 1;
    while (prev >= 0 && arr[prev] > value) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = value;
  }

  return arr;
};

for (const input of inputs[1].split(' ').map(BigInt)) {
  if (0n < input) acid.push(input);
  else alkaline.push(input);
}

if (acid.length && alkaline.length) {
  let ans = 1000000000n;
  let targetAcid;
  let targetAlkaline;
  for (let i = 0; i < acid.length; i++) {
    for (let j = 0; j < alkaline.length; j++) {
      let abs =
        acid[i] + alkaline[j] > 0n
          ? acid[i] + alkaline[j]
          : -1n * (acid[i] + alkaline[j]);
      if (ans > abs) {
        ans = abs;
        targetAcid = acid[i];
        targetAlkaline = alkaline[i];
      }
    }
  }
  console.log(targetAlkaline.toString(), targetAcid.toString());
} else if (acid.length) {
  const newAcid = selectionSort(acid);

  console.log(newAcid[0].toString(), newAcid[1].toString());
} else if (alkaline.length) {
  const newAlkaline = selectionSort(alkaline);
  console.log(newAlkaline[0].toString(), newAlkaline[1].toString());
}
