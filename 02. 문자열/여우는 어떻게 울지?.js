/**
 * @param {string} str 
 */
function makeSound(str) {
  return str.split(' ').slice(-1);
}

/**
 * @param {string} str 
 * @param {string[]} sounds 
 */
function fox(str, sounds) {
  return str.split(' ').filter(animalSound => !sounds.includes(animalSound));
}

/**
 * @param {string[]} testCase
 */
function foxSays(testCase) {
  const [animalSounds, ...animals] = testCase;
  const sounds = animals.map(animal => makeSound(animal)).flat();
  
  return fox(animalSounds, sounds).join(' ');
}

const fs = require('fs');

const [T, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const question = 'what does the fox say?';

const cases = lines.join('\n').split(question).slice(0, T).map(str => str.trim().split('\n'));

const result = cases.map(testCase => foxSays(testCase));

console.log(result.join('\n'));