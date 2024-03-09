const fs = require('fs');

const [, ...tail] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/**
 * @param {string} str1 
 * @param {string} str2 
 */
function compare(str1, str2) {
  if (str1.length === str2.length) {
    return str1 < str2;
  }

  return str1.length < str2.length;
}

/**
 * @param {string[]} words 
 * @param {number} low 
 * @param {number} high 
 */
function quickSort(words, low, high) {
  if (low >= high || low < 0) {
    return;
  }

  const partitionIndex = partition(words, low, high);

  quickSort(words, low, partitionIndex - 1);
  quickSort(words, partitionIndex + 1, high);
}

/**
 * @param {string[]} words 
 * @param {number} low 
 * @param {number} high 
 */
function partition(words, low, high) {
  const pivot = words[high];

  let i = low - 1;
  let j = low;

  while (j < high) {
    if (compare(words[j], pivot)) {
      i += 1;

      const temp = words[i];
      words[i] = words[j];
      words[j] = temp;
    }

    j += 1;
  }

  i += 1;

  const temp = words[i];
  words[i] = words[high];
  words[high] = temp;

  return i;
}

const result = [...new Set([...tail])];
quickSort(result, 0, result.length - 1);

console.log([...result].join('\n'));