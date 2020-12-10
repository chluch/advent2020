const fs = require('fs');
const { performance } = require('perf_hooks');

// Process data
const rawData = fs.readFileSync('../data/day2');
const pwList = rawData.toString().split(/\r?\n/);
pwList.pop(); // Remove newline at end of file

// Part 1
const countChars = (str) => {
  const counts = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    counts[char] ? counts[char] += 1 : counts[char] = 1;
  }
  return counts;
}

const checkPW1 = (str, validCount) => {
  const temp = str.split(' ');

  const min = temp[0].split('-')[0];
  const max = temp[0].split('-')[1];
  const char = temp[1].slice(0, -1);
  const strToCheck = temp[2];

  const charCount = countChars(strToCheck)[char];
  if (charCount >= min && charCount <= max) {
    validCount += 1;
  }
  return validCount;
}

let valid1 = 0;
for (let i = 0; i < pwList.length; i += 1) {
  valid1 = checkPW1(pwList[i], valid1);
}
console.log(valid1); // Answer to Part 1

// Part 2
const checkPosition = (str, char, pos1, pos2) => {
  let count = 0;
  str.charAt(pos1) === char ? count += 1 : null;
  str.charAt(pos2) === char ? count += 1 : null;
  return count;
}

// console.log(checkPosition('aabbcc', 'a', 0, 1));

const checkPW2 = (str, validCount) => {
  const temp = str.split(' ');
  const pos1 = temp[0].split('-')[0] - 1; // Start at 1
  const pos2 = temp[0].split('-')[1] - 1;
  const char = temp[1].slice(0, -1);
  const strToCheck = temp[2];

  const match = checkPosition(strToCheck, char, pos1, pos2);
  if (match === 1) {
    validCount += 1;
  }
  return validCount;
}

let valid2 = 0;
for (let i = 0; i < pwList.length; i += 1) {
  valid2 = checkPW2(pwList[i], valid2);
}
console.log(valid2); // Answer to Part 2