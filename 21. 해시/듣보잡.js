const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const knownPerson = [];
const unknownPerson = new Set();

for (let i = 0; i < n; i++) {
  knownPerson.push(inputs[i]);
}

for (let i = n; i < inputs.length; i++) {
  unknownPerson.add(inputs[i]);
}

const person = knownPerson.filter((it) => unknownPerson.has(it));

person.sort();

console.log(person.length);
console.log(person.join('\n'));
