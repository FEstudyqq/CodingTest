const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [T, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

function getTestCase(inputs) {
  const TC = [];
  let C = [];

  inputs.forEach((it) => {
    if (it === 'what does the fox say?') {
      TC.push(C);
      C = [];
    } else {
      C.push(it);
    }
  });

  return TC;
}

function getResult(inputs) {
  const [everySounds, ...animalSounds] = inputs;
  let everySoundList = everySounds.split(' ');

  for (const animalSound of animalSounds) {
    const [animal, sound] = animalSound.split(' goes ');
    everySoundList = everySoundList.filter((it) => it !== sound);
  }
  return everySoundList.join(' ');
}

const testCase = getTestCase(inputs);
const result = testCase.map((it) => getResult(it));

console.log(result.join('\n'));
