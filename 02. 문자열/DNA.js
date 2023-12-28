const fs = require('fs');

/**
 * @param {string[]} letters 
 */
function toSorted(letters) {
  const result = [...letters];
  result.sort();

  return result;
}

/**
 * @param {number[]} numbers 
 */
function sum(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

/**
 * @param {string} source 
 * @param {string} str 
 */
function hammingDistance(source, str) {
  let result = 0;

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== str[i]) {
      result++;
    }
  }

  return result;
}

/**
 * @param {string[]} strings 
 */
function lettersByIndex(strings) {
  const result = [];

  for (let i = 0; i < strings[0].length; i++) {
    const temp = [];

    strings.forEach(str => temp.push(str[i]));

    result.push(temp);
  }

  return result;
}

/**
 * @param {string[]} letters 
 */
function mostFrequentLetters(letters) {
  const frequencyMap = new Map();

  letters.forEach(letter => {
    if (frequencyMap.has(letter)) {
      frequencyMap.set(letter, frequencyMap.get(letter) + 1);
    } else {
      frequencyMap.set(letter, 1);
    }
  });

  const max = Math.max(...frequencyMap.values());

  const mostFrequent = [...frequencyMap.entries()].filter(([_, frequency]) => frequency === max);

  return mostFrequent.map(([letter, _]) => letter);
}

const [head, ...tail] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const byIndex = lettersByIndex(tail);

const mostFrequent = byIndex.map(letters => toSorted(mostFrequentLetters(letters))[0]);
const minHamming = mostFrequent.join('');

const minHammingValue = sum(tail.map(dna => hammingDistance(minHamming, dna)));

console.log(minHamming);
console.log(minHammingValue);